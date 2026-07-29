from unittest import result

from database import users
from models.user_model import User
import bcrypt
import jwt
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta
from fastapi import HTTPException


load_dotenv()
SECRET_KEY = os.getenv("JWT_SECRET")

print("Controller SECRET:", SECRET_KEY)

def signup(user: User):

    existing = users.find_one({"email": user.email})

    if existing:
        return {"message": "Email already exists"}

    hashed_password = bcrypt.hashpw(
        user.password.encode(),
        bcrypt.gensalt()
    )

    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    }

    result = users.insert_one(new_user)
    print("Inserted ID:", result.inserted_id)

    return {"message": "Signup Successful"}


def update_user(email, name):
    users.update_one(
        {"email": email},
        {
            "$set": {
                "name": name
            }
        }
    )

    return {
        "message": "Profile Updated"
    }

def delete_user(email):
    users.delete_one(
        {"email": email}
    )

    return {
        "message": "Account Deleted"
    }

def refresh_access_token(refresh_token):
    try:
        data = jwt.decode(
            refresh_token,
            SECRET_KEY,
            algorithms=["HS256"]
        )

        payload = {
            "email": data["email"],
            "exp": datetime.utcnow() + timedelta(minutes=30)
        }

        access_token = jwt.encode(
            payload,
            SECRET_KEY,
            algorithm="HS256"
        )

        return {
            "access_token": access_token
        }

    except:
        raise HTTPException(
            status_code=401,
            detail="Invalid Refresh Token"
        )


def login(email, password):

    print("Login Email:", email)

    user = users.find_one({"email": email})

    print("MongoDB User:", user)

    if not user:
        raise HTTPException(
            status_code=401,
            detail="User not found"
        )

    password_match = bcrypt.checkpw(
        password.encode(),
        user["password"]
    )

    print("Password Match:", password_match)

    if not password_match:
        raise HTTPException(
            status_code=401,
            detail="Wrong Password"
        )

    access_payload = {
        "email": user["email"],
        "exp": datetime.utcnow() + timedelta(minutes=30)
    }

    refresh_payload = {
        "email": user["email"],
        "exp": datetime.utcnow() + timedelta(days=7)
    }

    access_token = jwt.encode(
        access_payload,
        SECRET_KEY,
        algorithm="HS256"
    )

    refresh_token = jwt.encode(
        refresh_payload,
        SECRET_KEY,
        algorithm="HS256"
    )

    return {
    "message": "Login Successful",
    "access_token": access_token,
    "refresh_token": refresh_token,
    "user": {
        "name": user["name"],
        "email": user["email"]
    }
}
def logout():
       return {
        "message": "Logout Successful"
    }

def update_profile_image(email, image_path):

    result = users.update_one(
        {"email": email},
        {
            "$set": {
                "profile_image": image_path
            }
        }
    )

    print("Matched:", result.matched_count)
    print("Modified:", result.modified_count)

    return {
        "message": "Profile Image Updated"
    }
# new function to get user profile
def get_profile(email):

    user = users.find_one(
        {"email": email},
        {
            "_id": 0,
            "password": 0
        }
    )

    return user
#user
def get_all_users():

    users_list = list(
        users.find(
            {},
            {
                "_id": 0,
                "password": 0
            }
        )
    )

    return users_list

def search_users(search):
    users_list = list(
        users.find(
            {
                "$or": [
                    {"name": {"$regex": search, "$options": "i"}},
                    {"email": {"$regex": search, "$options": "i"}}
                ]
            },
            {
                "_id": 0,
                "password": 0
            }
        )
    )

    return users_list

def get_users_paginated(page, limit):
    skip = (page - 1) * limit

    users_list = list(
        users.find(
            {},
            {
                "_id": 0,
                "password": 0
            }
        ).skip(skip).limit(limit)
    )

    return users_list

def sort_users(order):

    if order == "asc":
        sort_order = 1
    else:
        sort_order = -1

    users_list = list(
        users.find(
            {},
            {
                "_id": 0,
                "password": 0
            }
        ).sort("name", sort_order)
    )

    return users_list

def filter_users(email):

    users_list = list(
        users.find(
            {
                "email": email
            },
            {
                "_id": 0,
                "password": 0
            }
        )
    )

    return users_list
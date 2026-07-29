from fastapi import HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("JWT_SECRET")

print("Middleware SECRET:", SECRET_KEY)

security = HTTPBearer() 


def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials

    print("Received Token:", token)

    try:
        data = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=["HS256"]
        )

        print("Decoded Data:", data)

        return data

    except Exception as e:
        print("JWT Error:", e)
        raise
        return data

    except jwt.ExpiredSignatureError:
        raise HTTPException(
            status_code=401,
            detail="Token Expired"
        )

    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=401,
            detail="Invalid Token"
        )
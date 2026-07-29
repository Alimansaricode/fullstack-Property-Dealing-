# from pydantic import BaseModel

# class User(BaseModel):
#     name: str
#     email: str
#     password: str


# from pydantic import BaseModel, EmailStr, Field

# class User(BaseModel):
#     name: str
#     email: EmailStr
#     password: str = Field(min_length=8)

# Signup में body validate करता है। tep 3

from pydantic import BaseModel, EmailStr, field_validator

class User(BaseModel):
    name: str
    email: EmailStr
    password: str

    @field_validator("password")
    @classmethod
    def validate_password(cls, value):
        if len(value) < 8:
            raise ValueError("Password must be at least 8 characters long.")
        return value
    print("Git Test")
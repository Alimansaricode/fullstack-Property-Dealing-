from database import users
from models.blog_model import Blog


def create_blog(blog: Blog):
    users.insert_one(blog.dict())

    return {
        "message": "Blog Created Successfully"
    }
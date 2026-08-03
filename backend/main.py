
from fastapi import FastAPI
from routes.auth_routes import router
from routes.upload_routes import router as upload_router
from fastapi.staticfiles import StaticFiles #mount (Images, PDF, CSS, JS)
from fastapi.middleware.cors import CORSMiddleware

print("========== MAIN FILE LOADED ==========")

app = FastAPI()
# Health Check API
@app.get("/")
def root():
    return {"message": "Property Dealing API is Running"}

@app.get("/health")
def health():
    return {"status": "ok"}
# CORS Middleware
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],
#     allow_credentials=True,
#     allow_methods=["*"],       // localhost:5173 से आने वाले request को allow करना।
#     allow_headers=["*"],
# )

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",   # ✅ इसे जोड़ो
        "https://propery-sell.netlify.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Authentication Routes
app.include_router(router)

# Upload Routes
app.include_router(upload_router)
# Static Files
app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)
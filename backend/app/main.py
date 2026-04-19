from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.download import router as download_router

app = FastAPI(title="Social Media Downloader API")

# ✅ CORS (frontend allow kare)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # production me restrict karna
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Routes
app.include_router(download_router, prefix="/api")

@app.get("/")
def root():
    return {"message": "API is running 🚀"}

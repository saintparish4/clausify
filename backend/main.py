from typing import Union

from fastapi import FastAPI
from .api import auth, documents, analysis, redlines

app = FastAPI(title="Clausify API", description="API for Clausify application")

@app.get("/")
async def root():
    return {"message": "Hello from Clausify API"}

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(documents.router, prefix="/api/documents", tags=["documents"])
app.include_router(analysis.router, prefix="/api/analysis", tags=["analysis"])
app.include_router(redlines.router, prefix="/api/redlines", tags=["redlines"]) 






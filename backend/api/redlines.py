from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def redlines_root():
    return {"message": "Redlines router"}

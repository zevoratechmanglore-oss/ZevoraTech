from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from contextlib import asynccontextmanager

import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


# ==== Load Environment ====
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')


# ==== Mongo Setup ====
mongo_url = os.environ["MONGO_URL"]
db_name = os.environ["DB_NAME"]


client = AsyncIOMotorClient(mongo_url)
db = client[db_name]


# ==== Lifespan Events (Startup + Shutdown) ====
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logging.info("🚀 Server starting...")
    logging.info("🌿 Connected to MongoDB")

    yield

    # Shutdown
    logging.info("⚠️ Closing MongoDB connection")
    client.close()
    logging.info("🟢 Server shutdown complete")


# ==== FastAPI App ====
app = FastAPI(lifespan=lifespan)


# ==== API Router ====
api_router = APIRouter(prefix="/api")


# ==== Models ====
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB _id
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# ==== Routes ====
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)

    # Insert into DB (Mongo accepts datetime natively)
    doc = status_obj.model_dump()
    await db.status_checks.insert_one(doc)

    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)

    return status_checks


# ==== Register Router ====
app.include_router(api_router)


# ==== CORS Middleware ====
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==== Logging ====
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

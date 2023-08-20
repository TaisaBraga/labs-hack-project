from fastapi import FastAPI
from routes import user
from database import models
from database.database import engine

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.include_router(user.router)
from fastapi import FastAPI
from .routes import user, estado
from .database import models
from .database.database import engine

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.include_router(user.router, prefix="/user")
app.include_router(estado.router, prefix="/estados")
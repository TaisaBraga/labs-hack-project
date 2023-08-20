from fastapi import FastAPI
from .routes import user
from .routes import produto
from .database import models
from .database.database import engine

app = FastAPI(
    title="Good2Go",
    version="0.1"
)

models.Base.metadata.create_all(bind=engine)

app.include_router(user.router, prefix="/user")
app.include_router(produto.router, prefix="/produto")
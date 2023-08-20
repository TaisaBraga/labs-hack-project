from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import user, produto, login, estado
from .database import models
from .database.database import engine

app = FastAPI(
    title="Good2Go",
    version="1.0"
)

origins = ["*"]

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)



models.Base.metadata.create_all(bind=engine)

app.include_router(user.router, prefix="/user")
app.include_router(produto.router, prefix="/produto")
app.include_router(login.router, prefix="/login")
app.include_router(estado.router, prefix="/estados")
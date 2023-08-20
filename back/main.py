from fastapi import FastAPI
from .routes import user, estado, produto, login


app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.include_router(user.router, prefix="/user")
app.include_router(produto.router, prefix="/produto")
app.include_router(login.router, prefix="/login")
app.include_router(estado.router, prefix="/estados")
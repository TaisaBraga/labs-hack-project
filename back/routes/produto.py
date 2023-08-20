from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm.session import Session
from sqlalchemy.exc import IntegrityError
from back.database.database import get_db
from back.database import models
from back import schemas

router = APIRouter(tags=["Produtos"])

@router.get("/")
def get_all(db: Session = Depends(get_db)):
    products = db.query(models.Produto).all()
    return {"message": products}

@router.post('/register')
def register_product(product: schemas.ProductEntry, db: Session = Depends(get_db)):

    new = models.Produto(**product.model_dump())

    db.add(new)
    try:
        db.commit()
        db.refresh(new)
        return {'message': new.model_dump()}
    except IntegrityError as err:
        raise HTTPException(status_code=409, detail={'message': err.args})
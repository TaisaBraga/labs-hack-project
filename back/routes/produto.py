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


@router.get("/{fornecedor_id}")
def get_by_id(fornecedor_id: str, db: Session = Depends(get_db)):
    fornecedor_query = db.query(models.User).filter(models.User.id == fornecedor_id)
    if not fornecedor_query.first():
        raise HTTPException(
            status_code=404, detail=f"Fornecedor não encontrado"
        )
    product_query = db.query(models.Produto).filter(models.Produto.fornecedor_id == fornecedor_id)
    return product_query.all()
    

@router.post('/register', status_code=201)
def register_product(product: schemas.ProductEntry, db: Session = Depends(get_db)):
    new = models.Produto(**product.model_dump())
    db.add(new)
    try:
        db.commit()
        db.refresh(new)
        return {'message': product.model_dump()}
    except IntegrityError as err:
        raise HTTPException(status_code=409, detail={'message': err.args})


@router.delete("/delete/{id}")
def delete_product(product_id: str, db: Session = Depends(get_db)):
    requested = db.query(models.Produto).filter(models.Produto.id == product_id).first()
    if not requested:
        raise HTTPException(
            status_code=404, detail=f"Fornecedor não encontrado"
        )
    
    db.delete(requested)
    db.commit()
    return Response(status_code=204)

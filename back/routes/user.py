from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.orm.session import Session
from sqlalchemy.exc import IntegrityError
from back.database.database import get_db
from back.OAuth2.OAuth2 import current_User
from back.database import models
from back import schemas
from back import utils

router = APIRouter(tags=["Users"])

@router.get("/")
def get_all(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return {"message": users}

@router.get("/{id}")
def get_user_by_id(id: str, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == id).first()
    if not user:
        raise HTTPException(
            status_code=404, detail=f"Fornecedor não encontrado"
        )
    return { "user": user}


@router.post('/register', status_code=201)
def register_user(user: schemas.UserEntry, db: Session = Depends(get_db)):
    password_hashed = utils.hash(user.password)
    user.password = password_hashed
    new_user = models.User(**user.model_dump())
    db.add(new_user)
    try:
        db.commit()
        db.refresh(new_user)
        return_user = user.model_dump()
        return_user.pop('password')
        return {'message': return_user}
    except IntegrityError as err:
        raise HTTPException(status_code=409, detail={'message': err.args})


@router.patch("/{id}", status_code=202)
def update_user(user_id: str, user: schemas.UserUpdate, db: Session = Depends(get_db), current_user: int= Depends(current_User)):
    user_query = db.query(models.User).filter(models.User.id == user_id)
    if current_user.email != user_query.first().email:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={'message': 'Operação não autorizada'}
        )
    
    data_dict = user.model_dump(exclude_unset=True)
    user_query.update(data_dict)
    db.commit()
    
    return {"message": "updated"}

@router.delete("/{id}", status_code=204)
def delete_product(user_id: str, db: Session = Depends(get_db), current_user: int= Depends(current_User)):
    user_query = db.query(models.User).filter_by(email = current_user.email)
    if current_user.email != user_query.first().email:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail={'message': 'Operação não autorizada'})

    if not user_query.first():
        raise HTTPException(
            status_code=404, detail=f"Ususario não encontrado"
        )
    
    db.delete(user_query.first())
    db.commit()
    return Response(status_code=204)

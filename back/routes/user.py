from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm.session import Session
from sqlalchemy.exc import IntegrityError
from back.database.database import get_db
from back.database import models
from back import schemas
from back import utils

router = APIRouter()

@router.get("/")
def get_all(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return {"message": users}


@router.post('/register')
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
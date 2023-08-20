from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm.session import Session
from sqlalchemy.exc import IntegrityError
from app.database.database import get_db
from app.database import models
from back import schemas

@router.post('/register')
def register_company(user: schemas.CompanyEntry, db: Session = Depends(get_db)):
    new = models.User(**user.model_dump())
    db.add(new)
    try:
        db.commit()
        db.refresh(new)
        return {'message': user.model_dump()}
    except IntegrityError as err:
        raise HTTPException(status_code=409, detail={'message': err.args})
    

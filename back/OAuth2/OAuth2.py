from jose import JWTError, jwt
from pydantic import BaseModel
from fastapi import Depends, HTTPException
from sqlalchemy.orm.session import Session
from back.database import database
from fastapi.security import OAuth2PasswordBearer
from back.database.config import settings
import datetime as dt


SECRET_KEY = settings.secret_key
ALGORITHM = settings.algorithm
EXPIRE_TIME = settings.access_token_expire_minutes


class TokenData(BaseModel):
	email: str

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='login')


def create_token(data: dict):
	to_encode = data.copy()

	expire = dt.datetime.utcnow() + dt.timedelta(minutes=EXPIRE_TIME)
	to_encode.update({"exp": expire})

	encoded = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
	return encoded

def verify_token(token: str, credentials_exception):
	try:
		payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
		email = payload.get("user_email")
		if email == None:
			raise credentials_exception
		token_data = TokenData(email= email)
	except JWTError:
		raise credentials_exception
	return token_data

def current_User(token: str= Depends(oauth2_scheme), db: Session= Depends(database.get_db)):
	crentials_exception = HTTPException(status_code=401,
				detail= 'Credencial invalida', headers={"WWW-Authenticate": "Bearer"})
			
	return verify_token(token, crentials_exception)
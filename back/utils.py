from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash(password):
	return pwd_context.hash(password)
	

def pwd_verify(plain_pwd, hashed_pass):
	return pwd_context.verify(plain_pwd, hashed_pass)
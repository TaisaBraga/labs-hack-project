from typing import Optional
from pydantic import BaseModel, EmailStr


class UserEntry(BaseModel):
    
    email: EmailStr
    name: str
    address: str
    password: str
    is_fornecedor: Optional[bool] = False
    is_active: Optional[bool] = True

class ProductEntry(BaseModel):
    
    name: str
    description: str
    fornecedor_id: int

class ProductUpdate(BaseModel):
    name: Optional[str]
    description: Optional[str]

class Token(BaseModel):
    access_token: str
    token_type: str
 
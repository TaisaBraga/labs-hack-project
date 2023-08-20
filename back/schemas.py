class UserEntry(BaseModel):
    
    email: EmailStr
    name: str
    adress: str
    password: str
    is_fornecedor: Optional[bool] = False
    is_active: Optional[bool] = True
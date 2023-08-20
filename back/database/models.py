from .database import Base
from sqlalchemy import Boolean, Column, DateTime, Integer, String, func

class User(Base):
    
    __tablename__ = "User"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    address = Column(String)
    is_fornecedor = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    created_on = Column(DateTime(timezone=True), server_default=func.now())
    updated_on = Column(DateTime(timezone=True), server_onupdate=func.now())

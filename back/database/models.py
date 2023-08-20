from .database import Base
from sqlalchemy import Boolean, Column, DateTime, Integer, String, func, ForeignKey
from sqlalchemy.orm import relationship
from pydantic import BaseModel



class User(Base):
    
    __tablename__ = "user"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    address = Column(String, nullable=True)
    is_fornecedor = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    produtos_info = relationship(
        "Produto",
        cascade="all, delete-orphan",
        back_populates="fornecedor",
        uselist=True
    )
    created_on = Column(DateTime(timezone=True), server_default=func.now())
    updated_on = Column(DateTime(timezone=True), server_onupdate=func.now())

class Produto(Base):
    
    __tablename__  = "produto"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    fornecedor_id = Column(Integer, ForeignKey("user.id"))
    fornecedor = relationship("User", back_populates="produtos_info")
    created_on = Column(DateTime(timezone=True), server_default=func.now())
    updated_on = Column(DateTime(timezone=True), server_onupdate=func.now())

from . import Base
from sqlalchemy import Column, Integer, String, Boolean

class ToDoItem(Base):
    __tablename__ = "todo_items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)  # Set a length for the VARCHAR column
    completed = Column(Boolean, default=False)
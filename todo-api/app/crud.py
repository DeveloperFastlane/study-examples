from . import SessionLocal
from .models import ToDoItem
from .schemas import ToDoItemCreate, ToDoItemUpdate
from sqlalchemy.orm import Session

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_todo_items(db: Session):
    return db.query(ToDoItem).all()

def create_todo_item(db: Session, item: ToDoItemCreate):
    new_item = ToDoItem(**item.dict())
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

def update_todo_item(db: Session, item_id: int, item: ToDoItemUpdate):
    db_item = db.query(ToDoItem).filter(ToDoItem.id == item_id).one()
    for key, value in item.dict().items():
        setattr(db_item, key, value)
    db.commit()

def delete_todo_item(db: Session, item_id: int):
    db_item = db.query(ToDoItem).filter(ToDoItem.id == item_id).one()
    db.delete(db_item)
    db.commit()

def get_todo_item(db: Session, item_id: int):
    return db.query(ToDoItem).filter(ToDoItem.id == item_id).one()
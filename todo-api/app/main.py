from fastapi import FastAPI, HTTPException, Depends
from .schemas import ToDoItem, ToDoItemCreate, ToDoItemUpdate
from .crud import get_db, get_todo_items, create_todo_item, update_todo_item, delete_todo_item, get_todo_item
from sqlalchemy.orm import Session

app = FastAPI()

@app.get("/todo/", response_model=list[ToDoItem])
def list_todo_items(db: Session = Depends(get_db)):
    return get_todo_items(db)

@app.post("/todo/", response_model=ToDoItem)
def add_todo_item(item: ToDoItemCreate, db: Session = Depends(get_db)):
    return create_todo_item(db, item)

@app.get("/todo/{item_id}", response_model=ToDoItem)
def read_todo_item(item_id: int, db: Session = Depends(get_db)):
    item = get_todo_item(db, item_id)
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@app.put("/todo/{item_id}", response_model=ToDoItem)
def update_todo_item(item_id: int, item: ToDoItemUpdate, db: Session = Depends(get_db)):
    db_item = get_todo_item(db, item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return update_todo_item(db, item_id, item)

@app.delete("/todo/{item_id}")
def delete_todo_item(item_id: int, db: Session = Depends(get_db)):
    db_item = get_todo_item(db, item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    delete_todo_item(db, item_id)
    return {"detail": "Item deleted successfully"}
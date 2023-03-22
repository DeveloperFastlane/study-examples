from app import Base, engine
from app.models import ToDoItem

Base.metadata.create_all(bind=engine)
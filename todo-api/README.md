# Simple ToDo Webapp API

A minimalistic ToDo webapp API built using FastAPI, SQLAlchemy, and MySQL.

## Features

- List all ToDo items
- Add a new ToDo item
- Update an existing ToDo item
- Delete a ToDo item

## Installation

1. Clone the repository or download the project files.

2. Set up a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```


3. Install the required dependencies:
```bash
pip install fastapi uvicorn sqlalchemy pymysql
```

4. Create a MySQL database named todo_db and a user with access to the database

Remember the username and password for later use.

5. Configure the .env file with the correct MySQL credentials:

```bash
DATABASE_URL=mysql+pymysql://username:password@hostname/todo_db
Initialize the database tables by running the following Python script:
```

```python
from app import Base, engine

Base.metadata.create_all(bind=engine)
```

6. Running the Application
Start the server by running:

```bash
uvicorn app.main:app --reload
```

The API will be accessible at http://127.0.0.1:8000/.

API Endpoints
GET /todo/: List all ToDo items
POST /todo/: Add a new ToDo item
GET /todo/{item_id}: Get a specific ToDo item
PUT /todo/{item_id}: Update a specific ToDo item
DELETE /todo/{item_id}: Delete a specific ToDo item
Use tools like curl or Postman to interact with the API, or integrate it with a frontend application.
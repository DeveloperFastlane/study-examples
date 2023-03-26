import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (inputValue.trim()) {
      await axios.post('http://localhost:5000/todos', {
        task: inputValue,
        completed: false,
      });
      setInputValue('');
      fetchTodos();
    }
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (id) => {
    await axios.patch(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>할 일 추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              onClick={() => toggleComplete(todo._id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

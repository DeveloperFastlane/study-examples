import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo.trim()]);
    setNewTodo("");
  };

  const handleUpdateTodo = (event, index) => {
    event.preventDefault();
    const updatedTodo = event.target.value.trim();
    if (updatedTodo === "") return;
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Todo List</h1>
      <form className={styles.form} onSubmit={handleAddTodo}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
      <ul className={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.listItem}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={`todo-${index}`}
            />
            <label className={styles.label} htmlFor={`todo-${index}`}>
              <input
                className={styles.editInput}
                type="text"
                value={todo}
                onChange={(event) => handleUpdateTodo(event, index)}
              />
              <span>{todo}</span>
            </label>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
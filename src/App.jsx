import { useState } from "react";
import List from "todo_components/List";
import Input from "todo_components/Input";
import { v4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [todoName, setTodoName] = useState("");

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: v4(), name: todoName, completed: false },
    ]);
    setTodoName("");
  };

  const checkTodo = (id, completed) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  return (
    <>
      <h1>Host App</h1>

      <div className="remote-container">
        <span className="remote-container-label">
          Todo remote components working together:
        </span>
        <Input value={todoName} onChange={setTodoName} onSubmit={addTodo} />
        <List items={todos} onTodoChange={checkTodo} />
      </div>
    </>
  );
}

export default App;

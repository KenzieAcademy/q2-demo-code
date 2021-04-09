import { useState, useEffect } from "react";

import TodoList from "./components/TodoList";
import useStore from "./store/store";
import "./App.css";

function App() {
  const todos = useStore((state) => state.todos);
  const setTodos = useStore((state) => state.setTodos);
  // const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos("http://localhost:3000/todos");
  }, []);

  return (
    <div className="App">
      <h2>
        Todo completed count:
        {todos.filter((todo) => todo.completed === true).length}
      </h2>
      <TodoList />
    </div>
  );
}

export default App;

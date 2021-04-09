import React from "react";
import useStore from "../store/store";

const TodoItem = (props) => {
  const setNewTodos = useStore((state) => state.setNewTodos);

  const toggleComplete = (completed, id) => {
    setNewTodos(`http://localhost:3000/todos/${id}`, completed);
  };

  return (
    <div>
      <p style={{ color: props.completed ? "green" : "red" }}>{props.title}</p>
      <button onClick={() => toggleComplete(props.completed, props.id)}>
        Toggle Complete
      </button>
    </div>
  );
};

export default TodoItem;

import React from "react";

import TodoItem from "./TodoItem";
import useStore from "../store/store";

const TodoList = (props) => {
  const todos = useStore((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </div>
  );
};

export default TodoList;

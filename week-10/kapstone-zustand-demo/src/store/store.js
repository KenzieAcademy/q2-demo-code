import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = (set) => ({
  todos: [],
  setTodos: (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((todosData) => {
        set({ todos: todosData });
      });
  },
  setNewTodos: (url, completed) => {
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
  },
});

export default create(devtools(useStore));

const { useState, useEffect } = React;

function App(props) {
  return <Todos />;
}

function Todos(props) {
  const [todos, setTodos] = useState([]);

  const clickHandler = (e) => {
    setTodos(todos => [...todos, "Next Todo"]);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);

  return (
    <>
      Hello world
      <button onClick={clickHandler}>Click Me</button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1>Todo Title: {todo.title}</h1>
            <h2>Todo Body: {todo.body}</h2>
          </div>
        );
      })}
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

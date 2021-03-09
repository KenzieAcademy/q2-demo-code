import { useReducer } from "react";

import "./App.css";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const TOGGLE_COLOR = "TOGGLE_COLOR";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case TOGGLE_COLOR:
      return {
        ...state,
        color: state.color === "red" ? "black" : "red",
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, color: "red" });

  return (
    <div className="App">
      <header className="App-header" style={{ color: state.color }}>
        <button onClick={(e) => dispatch({ type: INCREMENT })}>
          increment
        </button>
        <div>{state.count}</div>
        <button onClick={(e) => dispatch({ type: DECREMENT })}>
          decrement
        </button>
        <button onClick={(e) => dispatch({ type: TOGGLE_COLOR })}>
          change color
        </button>
      </header>
    </div>
  );
}

export default App;

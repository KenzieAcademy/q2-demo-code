import React, { useContext } from "react";

// Don't forget to import the Context object
import { DispatchContext } from "../App";

// import actions needed
import { INCREMENT, DECREMENT, TOGGLE_COLOR } from "../store/store";

export default function Counter(props) {
  // call useContext hook to get the current value from the DispatchContext
  const dispatch = useContext(DispatchContext);

  return (
    <header className="App-header" style={{ color: props.color }}>
      <button onClick={(e) => dispatch({ type: INCREMENT, payload: props.id })}>
        increment
      </button>
      <div>{props.count}</div>
      <button onClick={(e) => dispatch({ type: DECREMENT, payload: props.id })}>
        decrement
      </button>
      <button
        onClick={(e) => dispatch({ type: TOGGLE_COLOR, payload: props.id })}
      >
        change color
      </button>
    </header>
  );
}

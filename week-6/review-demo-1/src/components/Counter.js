import React from "react";

import { INCREMENT, DECREMENT, TOGGLE_COLOR } from "../store/store";

export default function Counter(props) {
  return (
    <header className="App-header" style={{color: props.color}}>
      <button onClick={(e) => props.dispatch({ type: INCREMENT, payload: props.id })}>
        increment
      </button>
      <div>{props.count}</div>
      <button onClick={(e) => props.dispatch({ type: DECREMENT, payload: props.id })}>
        decrement
      </button>
      <button onClick={(e) => props.dispatch({ type: TOGGLE_COLOR, payload: props.id })}>
        change color
      </button>
    </header>
  );
}

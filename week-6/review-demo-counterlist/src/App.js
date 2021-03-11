import "./App.css";
import React, { useReducer } from "react";
import { reducer } from "./store/store";
import CounterList from "./components/CounterList";

// initialize and export DispatchContext object
export const DispatchContext = React.createContext(null);

function App() {
  // define initial state
  const initialState = {
    counterList: [
      { count: 0, color: "red", id: 0 },
      { count: 0, color: "red", id: 1 },
    ],
    username: "", // currently unused but good for demo purposes
  };

  // call useReducer hook to initialize state and create dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div className="App">
        <header className="App-header">
          <CounterList counterList={state.counterList} />
          <button onClick={(e) => dispatch({ type: "CREATE" })}>
            Add counter
          </button>
        </header>
      </div>
    </DispatchContext.Provider>
  );
}

export default App;

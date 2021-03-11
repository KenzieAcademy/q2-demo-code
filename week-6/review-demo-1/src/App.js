import "./App.css";
import { useReducer } from "react";
import { reducer } from "./store/store";
import CounterList from "./components/CounterList";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    counterList: [
      { count: 0, color: "red", id: 0 },
      { count: 0, color: "red", id: 1 },
    ],
  });

  return (
    <div className="App">
      <header className="App-header">
        <CounterList counterList={state.counterList} dispatch={dispatch} />
        <button onClick={e=>dispatch({type: "CREATE"})}>Add counter</button>
      </header>
    </div>
  );
}

export default App;

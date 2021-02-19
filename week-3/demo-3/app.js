const { useState, useEffect } = React;

function App(props) {
  return <Pomodoro />;
}

function Pomodoro(props) {
  return (
    <div>
      Timer
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

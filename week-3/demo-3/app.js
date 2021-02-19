const { useState, useEffect, useRef } = React;

function App(props) {
  return (
    <Pomodoro />
  )
}

const user = {
  email: 'gwen@example.com',
  type: 'Staff'
}

function useUserType() {
  let isAdmin = false;
  switch (user.type) {
    case 'Staff':
    case 'Admin':
      isAdmin = true;
      break;
  }
  return [isAdmin];
}

function Pomodoro(props) {
  const [time, setTime] = useState(25);
  const [timerRunning, setTimerRunning] = useState(false);
  const [isAdmin] = useUserType();

  const timeRef = useRef(time)
  timeRef.current = time

  useEffect(() => {
    if (timerRunning) {
      window.timer = setInterval(() => {
        if (useRef.current === 0) {
          reset()
        } else {
          setTime(time => time - 1);
        }
      }, 1000)
    }

    return () => clear()
  }, [setTime, timerRunning])

  function toggleTimer() {
    setTimerRunning(!timerRunning)
  }

  function clear() {
    clearInterval(window.timer)
  }

  function reset() {
    clear()
    setTimerRunning(false)
    setTime(25)
  }

  return (
    <div>
      <p>
        {
          isAdmin ? 'Admin user' : 'Not admin user'
        }
      </p>
      <p>Time Remaining: { time }</p>
      <button onClick={toggleTimer}>Toggle</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));

import { useReducer } from 'react';

const CHANGE_LIGHT = 'CHANGE_LIGHT';
const TOGGLE_MAINTENANCE = 'TOGGLE_MAINTENANCE';

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LIGHT:
      let color = ''
      if (state.color === 'red') {
        color = 'green'
      } else if (state.color === 'green') {
        color = 'yellow'
      } else if (state.color === 'yellow') {
        color = 'red'
      }
      return {
        ...state,
        color
      }

    case TOGGLE_MAINTENANCE:
      return {
        ...state,
        inMaintenance: !state.inMaintenance
      }

    default:
      return state
  }
  
}

const initialState = {
  color: 'red',
  inMaintenance: false
}

function StopLight() {
  // const [color, setColor] = useState('green')
  const [state, dispatch] = useReducer(reducer, initialState)

  function changeLight() {
    dispatch({
      type: CHANGE_LIGHT,
    })
    // if (color === 'red') {
    //   setColor('green')
    // } else if (color === 'green') {
    //   setColor('yellow')
    // } else if (color === 'yellow') {
    //   setColor('red')
    // }
  }

  function toggleMaintenance() {
    dispatch({
      type: TOGGLE_MAINTENANCE
    })
  }

  if (state.inMaintenance) {
    return (
      <div>
        Currently in maintenance mode!
        <button onClick={toggleMaintenance}>Toggle Maintenance</button>
      </div>
    )
  }

  return (
    <div className="stoplight-wrapper">
      <div onClick={changeLight} className="light" style={{backgroundColor: state.color==='red' ? 'red': ''}}></div>
      <div onClick={changeLight} className="light" style={{backgroundColor: state.color==='yellow' ? 'yellow': ''}}></div>
      <div onClick={changeLight} className="light" style={{backgroundColor: state.color==='green' ? 'green': ''}}></div>
      <button onClick={toggleMaintenance}>Toggle Maintenance</button>
    </div>
  );
}

export default StopLight;

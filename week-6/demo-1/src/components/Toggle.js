import { useState } from 'react';

function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <div className="toggle-wrapper">
      <h2>I'm { on ? 'on' : 'off' }</h2>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </div>
  )
}

export default Toggle;

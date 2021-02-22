import { useState } from 'react';

import Cat from './components/Cat';
import './styles/App.css';

function App() {
  const [purrs, setPurrs] = useState(0);

  function handleSetPurrs() {
    setPurrs((state) => state + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>KitKat</h1>
        <p>Purrs: { purrs }</p>

        <Cat incrementPurrs={handleSetPurrs} />
      </header>
    </div>
  );
}

export default App;

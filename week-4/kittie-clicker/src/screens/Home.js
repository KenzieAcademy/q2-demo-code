import { useState } from 'react';

import Cat from '../components/Cat';
import '../styles/Home.css';

function Home() {
  const [purrs, setPurrs] = useState(0);

  function handleSetPurrs() {
    setPurrs((state) => state + 1)
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>KitKat</h1>
        <p>Purrs: { purrs }</p>

        <Cat incrementPurrs={handleSetPurrs} />
      </header>
    </div>
  );
}

export default Home;
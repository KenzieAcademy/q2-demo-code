import { useState } from "react";

import Cat from "../components/Cat";
import "../styles/Home.css";

function Intermediate(props) {
  const [purrs, setPurrs] = useState(0);

  function handleSetPurrs() {
    setPurrs((state) => state + 1);
  }

  return (
    <div className="Intermediate">
      <header className="Intermediate-header">
        <h1>{props.name}</h1>
        <p>Purrs: {purrs}</p>

        <Cat incrementPurrs={handleSetPurrs} />
      </header>
    </div>
  );
}

export default Intermediate;

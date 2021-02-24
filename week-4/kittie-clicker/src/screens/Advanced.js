import { useState } from "react";

import Cat from "../components/Cat";
import "../styles/Home.css";

function Advanced(props) {
  const [purrs, setPurrs] = useState(0);

  function handleSetPurrs() {
    setPurrs((state) => state + 1);
  }

  const { match } = props;

  return (
    <div className="Advanced">
      <header className="Advanced-header">
        <h1>{match.params.name}</h1>
        <p>Purrs: {purrs}</p>

        <Cat incrementPurrs={handleSetPurrs} />
      </header>
    </div>
  );
}

export default Advanced;

import { useState } from 'react';
import { Link } from 'react-router-dom';

import storeItems from '../storeItems';
import Cat from '../components/Cat';
import '../styles/Home.css';

function Home() {
  const [purrs, setPurrs] = useState(0);

  function handleSetPurrs() {
    setPurrs((state) => state + 1)
  }

  return (
    <div className="Home">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm">
            <h1>KitKat</h1>
            <p>Purrs: { purrs }</p>
            <Cat incrementPurrs={handleSetPurrs} />
          </div>
          <div className="col-sm">
            <h1>Store</h1>
            <Link to="/store">view all</Link>

            <ul className="list-group">
              {
                storeItems.map((item) => {
                  return <li key={item.id} className="list-group-item">{ item.name }</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
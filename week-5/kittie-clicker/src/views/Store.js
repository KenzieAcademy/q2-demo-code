import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import storeItems from '../storeItems';

function Store() {
  let history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <h1>Store</h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a onClick={() => history.goBack()}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Store</li>
            </ol>
          </nav>

          {
            storeItems.map((item) => {
              return <li key={item.id} className="list-group-item">
                <Link to={`/store/${item.id}`}>{ item.name }</Link>
              </li>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Store;
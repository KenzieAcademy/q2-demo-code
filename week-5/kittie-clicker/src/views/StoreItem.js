import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import storeItems from '../storeItems';

function StoreItem(props) {
  let history = useHistory();
  const { match } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <h1>Store Item { match.params.id }</h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a onClick={() => history.goBack()}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">Store</li>
              <li className="breadcrumb-item active" aria-current="page">Store</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default StoreItem;

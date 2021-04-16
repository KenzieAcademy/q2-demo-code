import React from "react";
import { useHistory } from "react-router-dom";

import { Card } from "react-bootstrap";

function StoreItem(props) {
  let history = useHistory();
  const { match, storeItems } = props;
  const currentItem = storeItems.find((item) => {
    return item.id === Number(match.params.id);
  });
  console.log(currentItem);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <h1>Store Item name: {currentItem.name}</h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a onClick={() => history.goBack()}>Home</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Store
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {match.params.id}
              </li>
            </ol>
          </nav>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{currentItem.name}</Card.Title>
              <Card.Text>
                Price: $ {currentItem.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;

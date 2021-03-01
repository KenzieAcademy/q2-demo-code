import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  ListGroup,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import storeItems from '../storeItems';

function Store() {
  let history = useHistory();
  const [filter, setFilter] = useState('');
  
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={{ span: 4, offset: 4 }}>
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

          <button onClick={() => setFilter('')} type="button" className="btn btn-primary">Clear Filter</button>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => setFilter('toy')} type="button" className="btn btn-primary">Toys</button>
            <button onClick={() => setFilter('structure')} type="button" className="btn btn-primary">Structures</button>
            <button onClick={() => setFilter('bowl')} type="button" className="btn btn-primary">Bowls</button>
          </div>

          <ListGroup>
            {
              storeItems.filter((item) => {
                if (filter) {
                  return item.type === filter;
                }
                return true;
              }).map((item) => {
                return (
                  <ListGroup.Item key={item.id}>
                    <Link to={`/store/${item.id}`}>{ item.name }</Link>
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Store;
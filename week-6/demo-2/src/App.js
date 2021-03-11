import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import TopNav from './components/TopNav';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';

function App() {
  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <Col sm={4}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

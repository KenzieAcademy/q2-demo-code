import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Home from "./views/Home";
import Login from "./views/Login";
import Users from "./views/Users";
import User from "./views/User";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>User Management Portal</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:username" render={(props) => <User {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

import { Navbar, Nav } from 'react-bootstrap';

import user from '../data/user';

function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>{ user.name }' App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/settings">Settings</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default TopNav;

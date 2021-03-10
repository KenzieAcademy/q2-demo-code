import { Card } from 'react-bootstrap';

import user from '../data/user';

function Dashboard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Personal Information</Card.Title>
        <Card.Text>
          I'm a { user.occupation } and { user.statement }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;

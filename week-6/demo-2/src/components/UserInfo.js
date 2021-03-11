import { useContext } from 'react';
import { Card } from 'react-bootstrap';

import { UserContext } from '../UserContextProvider';

function Dashboard() {
  const user = useContext(UserContext);
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

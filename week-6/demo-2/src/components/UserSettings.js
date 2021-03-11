import { useContext } from 'react';
import { Card } from 'react-bootstrap';

import { UserContext } from '../UserContextProvider';

function Dashboard() {
  const user = useContext(UserContext);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Settings</Card.Title>
        <Card.Text>
          <p>Name: { user.name }</p>
          <p>Occupation: { user.occupation }</p>
          <p>Notifications: { user.notifications }</p>
          <p>Favorite Color: { user.favoriteColor }</p>
          <p>What do I do?: { user.statement }</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;

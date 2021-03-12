import { Card } from 'react-bootstrap';

import { useStore } from '../store/reduxLikeStore';

function Dashboard() {
  const user = useStore(state => state.user)
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

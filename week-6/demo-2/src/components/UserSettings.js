import { Card } from 'react-bootstrap';

import { types, useStore } from '../store/reduxLikeStore';

function Dashboard() {
  const user = useStore(state => state.user)
  const dispatch = useStore(state => state.dispatch)

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

          <button onClick={() => dispatch({ type: types.setName, newName: 'Pete' })}>
            Update Name
          </button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;

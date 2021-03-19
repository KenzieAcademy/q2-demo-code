import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// import { useStore } from "../store";

function UserCard({ user }) {
  const history = useHistory();
  // const user = useStore((state) => state.user);
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{ user.username }</Card.Title>
        <Card.Text>
          { user.displayName }
        </Card.Text>
        <Button onClick={() => history.push(`/users/${user.username}`)} variant="primary">See user</Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard;

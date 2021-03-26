import { Card, Button } from "react-bootstrap";
// import { propTypes } from 'react-bootstrap/esm/Image';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory } from "react-router-dom";
// import { useStore } from "../store";

function UserCard(props) {
  const history = useHistory();
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.user.username}</Card.Title>
        <Card.Text>{props.user.displayName}</Card.Text>
        <div>About: {props.user.about}</div>
        <div>About: {props.user.createdAt}</div>
        <Button
          onClick={() => history.push(`/users/${props.user.username}`)}
          variant="primary"
        >
          See user
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;

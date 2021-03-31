import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore } from "../store";
import { getUser, patchUser, putUserPicture } from "../fetchRequests";

function User({ match }) {
  const authUser = useStore((state) => state.user);
  const [user, setUser] = useState({});
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [picture, setPicture] = useState({});

  useEffect(() => {
    // get user info
    getUser(match.params.username).then((data) => {
      setUser(data.user);
      setDisplayName(data.user.displayName);
      setAbout(data.user.about);
    });
  }, [match]);

  function handleSubmit(e) {
    e.preventDefault();
    const newUserInfo = {
      about,
      displayName,
    };
    patchUser(authUser.token, user.username, newUserInfo).then((data) => {
      setUser(data.user);
    });
  }

  function handleSubmitPhoto(event) {
    putUserPicture(authUser.token, authUser.username, picture);
  }

  return (
    <Container>
      <div>Username: {user.username}</div>
      <p>About Me:</p>
      <p>{user.about}</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>About</Form.Label>
          <Form.Control
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            type="text"
            placeholder="About me..."
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            onChange={(e) => setAbout(e.target.value)}
            value={displayName}
            type="text"
            placeholder="my real name"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <input
        type="file"
        onChange={(event) => setPicture(event.target.files[0])}
      />
      <button onClick={handleSubmitPhoto}>update my photo</button>
      <img src={"https://socialapp-api.herokuapp.com" + user.pictureLocation} />
    </Container>
  );
}

export default User;

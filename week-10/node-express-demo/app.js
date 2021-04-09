const express = require("express");
const app = express();
const morgan = require('morgan');
// const jwt = require('express-jwt')
var jwt = require('jsonwebtoken');

const port = 3000;

const secret = 'bobross'

const db = {
  users: [
    {
      id: 1,
      username: "Bob",
      password: "1234",
      token: ''
    },
    {
      id: 2,
      username: "Luna",
      password: "1234",
      token: ''
    },
    { 
      id: 3,
      username: "Ash",
      password: "1234",
      token: ''
    },
  ],
};

// middleware
app.use(express.json());
app.use(morgan(':method :url :response-time'))
// function logger(req, res, next) {
//   console.log('200 GET Success')
//   next()
// }
// app.use(logger)

function checkAuth(req, res, next) {
  // check if a user is authenticated
  // if yes, then call next()
  // if no, return a 401 status
  try {
    const token = req.headers.authorization?.slice(7) || ''
    var decoded = jwt.verify(token, secret);
    console.log(decoded)
    if (decoded) {
      next()
    } else {
      res.sendStatus(401)
    }
  } catch(err) {
    res.status(401).send(err.message)
  }
}

// api
app.get("/", (req, res) => {
  res.send("hello from express");
});

app.get("/users", (req, res) => {
  res.json(db.users)
});

app.get("/users/:id", checkAuth, (req, res) => {

  const selectedUser = db.users.find((user) => {
    return user.id === parseInt(req.params.id)
  });
  res.json(selectedUser);
});

app.post("/users/login", (req, res) => {
  // log user in here
  const {username, password} = req.body
  // find the user by username
  const user = db.users.find((u) => {
    return u.username === username
  })
  // check that the password is correct
  if (user.password === password) {
    // find the user and log them in
    const index = db.users.findIndex((u) => {
      return u.id === user.id
    })

    const token = jwt.sign({ foo: 'bar' }, secret)
    db.users[index].token = token

    res.send(token)
  }
  res.status(401)
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

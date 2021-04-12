const express = require("express");
const app = express();
const morgan = require('morgan');
// const jwt = require('express-jwt')
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/testapp', {useNewUrlParser: true, useUnifiedTopology: true});

const port = 3000;

const secret = 'bobross'

const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: ''
  }
})

// middleware
app.use(express.json());
app.use(morgan(':method :url :response-time'))

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

app.get("/users", async (req, res) => {
  // query users collection
  const users = await User.find({});
  res.json(users)
});
app.post("/users", (req, res) => {
  // req.body -> {username: '', password: ''}
  const user = new User(req.body);
  user.save().then(() => {
    res.json(user)
  }).catch((err) => {
    res.status(400).send(err)
  })
})

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).exec();

  res.json(user);
});

app.post("/users/login", async (req, res) => {
  // log user in here
  const {username, password} = req.body
  // find the user by username
  const user = await User.findOne({ username }).exec();

  if (!user) {
    res.status(401)
  }

  // // check that the password is correct
  if (user.password === password) {
    // log them in
    const token = jwt.sign({ foo: 'bar' }, secret)
    const updatedUser = await User.updateOne({ username }, { token });

    res.send(updatedUser)
  }
  res.status(401)
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

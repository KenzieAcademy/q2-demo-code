const express = require("express");
const app = express();
const port = 3000;

const db = [
  { title: "test todo 1", completed: false },
  { title: "test todo 2", completed: false },
  { title: "test todo 3", completed: true },
  { title: "test todo 4", completed: false },
  { title: "test todo 5", completed: false },
];

app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  next();
});

app.get("/", (req, res) => {
  console.log("Get request received");
  res.send("Hello postman");
});

app.get("/todos", (req, res) => {
  res.json(db);
});

app.post("/todos", (req, res) => {
  db.push(req.body);
  res.status(201).json(db);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

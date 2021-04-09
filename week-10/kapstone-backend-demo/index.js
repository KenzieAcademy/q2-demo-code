const express = require("express");
const app = express();
const port = 3000;

const db = [
  { id: 1, title: "test todo 1", completed: false },
  { id: 2, title: "test todo 2", completed: false },
  { id: 3, title: "test todo 3", completed: true },
  { id: 4, title: "test todo 4", completed: false },
  { id: 5, title: "test todo 5", completed: false },
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
  db.push({
    ...req.body,
    completed: false,
    id: db.length + 1,
  });
  res.status(201).json(db);
});

app.patch("/todos/:id", (req, res) => {
  const replacement = db.findIndex((todo) => todo.id === Number(req.params.id));

  if (replacement === -1 || req.body.completed === undefined) {
    res.status(400).send("Bad request entity doesn't exist");
    return;
  }

  db[replacement] = {
    ...db[replacement],
    ...req.body,
    title: db[replacement].title,
    id: Number(req.params.id),
  };

  res.status(201).json(db);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

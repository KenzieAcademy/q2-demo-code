const express = require("express");
const app = express();
const port = 3000;

const db = [{ test: "test", id: 1 }];

app.use(express.json());

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.header()

  next();
});

app.get("/", (req, res) => {
  console.log("get request received");
  res.send(db);
});

app.post("/", (req, res) => {
  console.log("post request received");
  console.log(req.body);
  db.push(req.body);
  res.send(db);
});

app.patch("/:id", (req, res) => {
  console.log("recieve patch");
  const replacementIndex = db.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );

  if (replacementIndex === -1) {
    res.status(400).send("Bad request entity doesn't exist");
  }

  console.log(typeof(replacementIndex))

  db[replacementIndex] = {
    ...db[replacementIndex],
    ...req.body,
  };

  res.send("Updated successfully!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

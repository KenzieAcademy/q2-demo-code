const express = require("express");
const { nanoid } = require("nanoid");
const app = express();
const port = 3000;

const db = { urls: [{ original: "testing", short: "test", id: nanoid() }] };

// middleware
app.use(express.json());

// api
app.get("/", (req, res) => {
  res.send("hello from express");
});

app.get("/urls", (req, res) => {
  res.json(db);
});

app.get("/urls/:id", (req, res) => {
    const selectedURL = db.urls.find((url)=>{
        if(url.id === req.params.id){
            return true
        } else {
            return false
        }
    })
  res.json(selectedURL);
});

app.post("/urls", (req, res) => {
  // 201
  const url = {
    original: req.body.original,
    short: "123abc",
    id: nanoid()
  };
  db.urls.push(url);
  res.status(201).json(url);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

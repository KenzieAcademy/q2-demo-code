const express = require("express");
const { nanoid } = require("nanoid");
const app = express();
const port = 3000;

const db = {
  urls: [
    { original: "testing", domain: "Testing", short: "test", id: nanoid(), isAdmin: true },
    { original: "zebra", domain: "zebra.com", short: "zebra", id: nanoid(), isAdmin: false },
    { original: "duckduckgo", domain: "duckduckgo", short: "duck", id: nanoid(), isAdmin: true },
    { original: "bobross", domain: "bobross", short: "bobross", id: nanoid(), isAdmin: true },
  ],
};

// duckduckgo.com/urls?name=bobross&occupation=painter

// middleware
app.use(express.json());

// api
app.get("/", (req, res) => {
  res.send("hello from express");
});

app.get("/test", (req, res) => {
  res.send(req.query)
})

app.get("/urls", (req, res) => {
  const { search, sortby, filterby } = req.query

  let urls = db.urls
  if (search) {
    urls = urls.filter((url) => {
      return url.original.includes(search)
    })
  }

  if (filterby) {
    urls = urls.filter((url) => {
      return url[filterby] // url.isadmin
    })
  }

  if (sortby) {
    // sortby = 'domain'
    urls = urls.sort((a, b) => {
      const x = a[sortby].toLowerCase() < b[sortby].toLowerCase() 
      if (x) {
        return 1
      } else {
        return -1
      }
    })
  }
  
  res.json(urls);
});

app.get("/urls/:id", (req, res) => {
  const selectedURL = db.urls.find((url) => {
    if (url.id === req.params.id) {
      return true;
    } else {
      return false;
    }
  });
  res.json(selectedURL);
});

app.post("/urls", (req, res) => {
  // 201
  const url = {
    original: req.body.original,
    domain: req.body.domain,
    short: "123abc",
    id: nanoid(),
  };
  db.urls.push(url);
  res.status(201).json(url);
});

// replaces entire entity OR creates entity if it doesn't exist
app.put("/urls/:id", (req, res) => {
  if (!req.body.original) {
    res.status(400).send("Bad request need original field");
  }

  const replacement = db.urls.findIndex((url) => url.id === req.params.id);

  // simple error handling if entity doesn't exist
  // if (replacement === -1) {
  //   res.status(400).send("Bad Request need original field");
  // }

  // since rules of PUT request allows for creation of new entity
  // if entity doesn't exist, this logic would support that functionality
  if (replacement === -1) {
    // setting "id" based on the id passed in from request params
    // setting "short" based on a default string
    db.urls.push({ ...req.body, short: "123abc", id: req.params.id });
    res.send("Updated successfully!");
  }

  db.urls[replacement] = {
    ...req.body,
    short: db.urls[replacement].short,
    id: req.params.id,
  };

  res.send("Updated successfully!");
});

// updates an existing entity
app.patch("/urls/:id", (req, res) => {
  const replacement = db.urls.findIndex((url) => url.id === req.params.id);

  if (replacement === -1) {
    res.status(400).send("Bad request entity doesn't exist");
  }

  db.urls[replacement] = {
    ...db.urls[replacement],
    ...req.body,
    short: db.urls[replacement].short,
    id: req.params.id,
  };

  res.send("Updated successfully!");
});

app.delete("/urls/:id", (req, res) => {
  const replacement = db.urls.findIndex((url) => url.id === req.params.id);

  if (replacement === -1) {
    res.status(400).send("Bad request entity doesn't exist");
  }

  db.urls = db.urls.filter((url) => url.id !== req.params.id);

  res.send("Delete successful");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

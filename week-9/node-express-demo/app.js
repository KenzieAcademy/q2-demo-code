const express = require('express')
const app = express()
const port = 3000

const db = []

// middleware
app.use(express.json())
app.use(express.static('public'))

// api
app.get('/', (req, res) => {
    res.sendfile('./index.html')
})

app.get('/urls', (req, res) => {
    res.json(db)
})
app.get('/urls/:id', (req, res) => {
    res.json(db)
})

app.post('/urls', (req, res) => {
    // 201
    const url = {
        original: req.body.original,
        short: '123abc'
    }
    db.push(url)
    res.json(url)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})

const express = require('express');


const app = express();

const books = ["Lost Paradise", "Little Prince", "The Shining"]

app.get('/', (req, res) => {
    res.send("Hi, loosers!")
})

app.get('/books/:index', (req, res) => {
    res.send(books[req.params.index]);
})

app.listen(3000, () => {
    console.log("Bookbook backend up!");
})


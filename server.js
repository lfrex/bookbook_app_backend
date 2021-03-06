const express = require('express');


const app = express();

const books = ["LostParadise", "Little Prince", "The Shining", "LostParadise"]

app.get('/', (req, res) => {
    res.send("Hi, loosers!")
})

app.get('/books/count', (req, res) => {
    let book = req.query.book

    let count = books.filter((val) => {
        return val === book
    }).length;

    res.send(`The number of available ${book}\s is ${count}`);
})

app.get('/books/:index', (req, res) => {
    res.send(books[req.params.index]);
})



app.listen(3000, () => {
    console.log("Bookbook backend up!");
})


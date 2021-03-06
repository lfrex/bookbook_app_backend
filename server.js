const express = require('express');
const books =  require('./models/books');

const app = express();



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

app.get('/books/:index', function(req, res){
    res.render('show.ejs', {

        book: books[req.params.index]
    });
})



app.listen(3000, () => {
    console.log("Bookbook backend up!");
})


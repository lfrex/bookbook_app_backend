const express = require('express');
const books =  require('./models/books');

const app = express();



//Current Routes:

app.get('/books/', (req, res) => {
    res.send(books);
});

app.get('/books/:index', function(req, res){
    res.render('show.ejs', {

        book: books[req.params.index]
    });
})



app.listen(3000, () => {
    console.log("Bookbook backend up!");
})


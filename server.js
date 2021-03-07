const express = require('express');
const books =  require('./models/books');

const app = express();

//Middleware
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    console.log("Running on all routes");
    next();
});

//Current Routes:

app.get('/books/', (req, res) => {
    res.render("index.ejs");
});

app.get('/books/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/books', (req, res) => {
    if(req.body.isRead === 'on'){
        req.body.isRead = true;
    } else {
        req.body.isRead = false;
    }
    books.push(req.body);
    console.log(books)
    res.redirect('/books');
});

app.get('/books/:index', function(req, res){
    res.render('show.ejs', {

        book: books[req.params.index]
    });
})




app.listen(3000, () => {
    console.log("Bookbook backend up!");
})


const express = require('express');
const books =  require('./models/books');
const methodOverride = require('method-override');

const app = express();

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log("Running on all routes");
    next();
});

//Current Routes:

app.get('/books/', (req, res) => {
    res.render("index.ejs", {
        books: books
    });
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

app.delete('/books/:index', (req, res) => {
    books.splice(req.params.index, 1);
    res.redirect('/books');
})

app.get('/books/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        
        book: books[req.params.index],
        index: req.params.index

    });
});

app.put('/books/:index', (req, res) => {
    if(req.res.isRead === 'on') {
        req.body.isRead = true;
    } else {
        req.body.isRead = false;
    }
        books[req.params.index] = req.body;
        res.redirect('/books');
})

app.listen(3000, () => {
    console.log("Bookbook backend up!");
})


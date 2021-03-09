const books = require('../books.js');


const index = (req, res) => {
    res.render('index.ejs', {
        books : books
    });
};

const show = (req, res) => {
    res.render('show.ejs', {
        book: books[req.params.index]
    });
};

const renderNew = (req, res) => {
    res.render('new.ejs');
};

const postBook = (req, res) => {
    if(req.body.isRead === 'on') {
        req.body.isRead = true;
    } else {
        req.body.isRead = false;
    }
    books.push(req.body);
    res.redirect('/books');
} 

const renderEdit = (req, res) => {
    res.render("edit.ejs", {
        book: books[req.params.index],
        index: req.params.index
    });
}

const editBook = (req, res) => {
    if(req.res.isRead === 'on') {
        req.body.isRead = true;
    } else {
        req.body.isRead = false;
    }
        books[req.params.index] = req.body;
        res.redirect('/books');
}

const deleteBook = (req, res) => {
    books.splice(req.params.index, 1);
    res.redirect('/books');
}

module.exports = {
    index,
    show,
    renderNew,
    postBook,
    renderEdit,
    editBook,
    deleteBook
};

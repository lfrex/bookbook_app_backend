const Book = require('../models').Book;


const index = (req, res) => {
    Book.findAll()
    .then(books => {
        res.render('index.ejs', {
            books : books
        });
    })   
};

const show = (req, res) => {
    Book.findByPk(req.params.index)
    .then(book => {
        res.render('show.ejs', {
            book: book
        });
    })
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

    Book.create(req.body)
    .then(newBook => {
        res.redirect('/books');
    })  
} 

const renderEdit = (req, res) => {
    Book.findByPk(req.params.index)
    .then(book => {
        res.render("edit.ejs", {
            book: book
        });
    }) 
}

const editBook = (req, res) => {
    if(req.res.isRead === 'on') {
        req.body.isRead = true;
    } else {
        req.body.isRead = false;
    }
    Book.update(req.body, {
        where: { id: req.params.index },
        returning: true,
        }
    )
    .then(book => {
        res.redirect('/books');
    })     
}

const deleteBook = (req, res) => {
Book.destroy({ where: { id: req.params.index } })
    .then(() => {
        res.redirect('/books');
    })   
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

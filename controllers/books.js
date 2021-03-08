const books = require('../models/books.js');

const index = (req, res) => {
    res.render('index.ejs', {
        books : books
    });
};


module.exports = {
    books: require('./books')
}

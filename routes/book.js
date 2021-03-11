const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// router.get('/new', ctrl.books.renderNew);
// router.get('/', ctrl.books.index);
// router.get('/:index', ctrl.books.show);
router.get('/all', ctrl.book.getAll);
router.get('/:book', ctrl.book.getBookById);
// router.post('/', ctrl.books.postBook);
// router.get('/:index/edit', ctrl.books.renderEdit);
// router.put('/:index', ctrl.books.editBook);
// router.delete('/:index', ctrl.books.deleteBook);

module.exports = router;
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.books.index);


module.exports = router;
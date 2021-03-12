const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile', ctrl.user.getProfile);
router.put('/profile', ctrl.user.editProfile);
router.post('/signup', ctrl.user.signup);
router.post('/login', ctrl.user.login);


// router.get('/', ctrl.users.index);
// router.get('/signup', ctrl.users.renderSignup);
// router.post('/signup', ctrl.users.signup);
// router.get('/profile/:index', ctrl.users.renderProfile);
// router.get('/login', ctrl.users.renderLogin);
// router.post('/login', ctrl.users.login);
// router.put('/profile/:index', ctrl.users.editProfile);
// router.delete('/:index', ctrl.users.deleteUser);

module.exports = router;

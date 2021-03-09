const User = require('../models').User;
const Book = require('../models').Book
;

const index = (req, res) => {
    res.render('users/index.ejs')
};

const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
};

const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
   
};

const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`);
    })
}

const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include : [
            {
                model: Book,
                attributes: [ 'id', 'title', 'author', 'isbn', 'genre', 'isRead', 'img', 'added', 'comments' ]
            }
        ]
    })
    .then(userProfile => {
        Book.findAll()
        .then(allBooks => {
            res.render('users/profile.ejs', {
                user: userProfile,
                books: allBooks
            });
        });       
    });
};

const editProfile = (req, res) => {
    User.update(req.body, {
        where: { id: req.params.index },
        returning: true
    })
    .then(updatedUser => {
        Book.findByPk(req.body.book)
        .then(foundBook => {
            User.findByPk(req.params.index)
            .then(foundUser => {
                foundUser.addBook(foundBook);
                res.redirect(`/users/profile/${req.params.index}`);
            });
        });    
    });
};

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/users');
    })
}

module.exports = {
    index,
    renderSignup,
    signup,
    renderLogin,
    login,
    renderProfile,
    editProfile,
    deleteUser
}
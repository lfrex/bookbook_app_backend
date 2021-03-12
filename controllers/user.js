const User = require('../models').User;
const Book = require('../models').Book;

const constants = require('../constants');

const getProfile = (req, res) => {
    let sort = 'DESC';
    if(req.query.sorted === 'asc')
        sort = 'ASC';
    
    User.findByPk(req.user.id, {
        include: [
            {
                model: Book,
                attributes: ['id', 'title', 'author', 'isbn', 'genre', 'isRead', 'img', 'added', 'comments']
            }
        ],
        attributes: ['id', 'name', 'username', 'pic'],
    })
    .then(userProfile => {
        res.status(constants.SUCCESS).json(userProfile)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}


const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.user.id
        },
        returning: true
    })
    .then(() => {
        User.findByPk(req.user.id, {
            include: [
                {
                    model: Book,
                    attributes: ['id', 'title', 'author', 'isbn', 'genre', 'isRead', 'img', 'added', 'comments']
                }
            ],
            attributes: ['id', 'name', 'username', 'pic']
        })
        .then(userProfile => {
            res.status(constants.SUCCESS).json(userProfile)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

// const index = (req, res) => {
//     res.render('users/index.ejs')
// };

// const renderSignup = (req, res) => {
//     res.render('users/signup.ejs')
// };

// const signup = (req, res) => {
//     User.create(req.body)
//     .then(newUser => {
//         res.redirect(`/users/profile/${newUser.id}`);
//     })
   
// };
const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.status(constants.SUCCESS).json({ "user": newUser});
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`Error: ${err}`);
    })
}


// const renderLogin = (req, res) => {
//     res.render('users/login.ejs')
// }

// const login = (req, res) => {
//     User.findOne({
//         where: {
//             username: req.body.username,
//             password: req.body.password
//         }
//     })
//     .then(foundUser => {
//         res.redirect(`/users/profile/${foundUser.id}`);
//     })
// }

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.STATUS(constants.SUCCESS).json({"user": foundUser})
    })
    .catch(err => {
        res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect username/password`);
    })
}

// const renderProfile = (req, res) => {
//     User.findByPk(req.params.index, {
//         include : [
//             {
//                 model: Book,
//                 attributes: [ 'id', 'title', 'author', 'isbn', 'genre', 'isRead', 'img', 'added', 'comments' ]
//             }
//         ]
//     })
//     .then(userProfile => {
//         Book.findAll()
//         .then(allBooks => {
//             res.render('users/profile.ejs', {
//                 user: userProfile,
//                 books: allBooks
//             });
//         });       
//     });
// };

// const editProfile = (req, res) => {
//     User.update(req.body, {
//         where: { id: req.params.index },
//         returning: true
//     })
//     .then(updatedUser => {
//         Book.findByPk(req.body.book)
//         .then(foundBook => {
//             User.findByPk(req.params.index)
//             .then(foundUser => {
//                 foundUser.addBook(foundBook);
//                 res.redirect(`/users/profile/${req.params.index}`);
//             });
//         });    
//     });
// };

// const deleteUser = (req, res) => {
//     User.destroy({
//         where: {
//             id: req.params.index
//         }
//     })
//     .then(() => {
//         res.redirect('/users');
//     })
// }

module.exports = {
    getProfile,
    editProfile,
    signup,
    login
    // index,
    // renderSignup,
    // signup,
    // renderLogin,
    // login,
    // renderProfile,
    // editProfile,
    // deleteUser
}
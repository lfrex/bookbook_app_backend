'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    genre: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN,
    img: DataTypes.STRING,
    added: DataTypes.DATEONLY,
    comments: DataTypes.TEXT
  }, {});
  Book.associate = function(models) {
    Book.belongsToMany(models.User, { 
      through: "UserBook",
        foreignKey: "bookId",
        otherKey: "userId" })
  };
  return Book;
};

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Book extends Model {
//     static associate(models) {
//       Book.belongsToMany(models.User, {
//         through: "UserBook",
//         foreignKey: "bookId",
//         otherKey: "userId",
//       });
//     }
//   };
//   Book.init({
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     isbn: DataTypes.STRING,
//     genre: DataTypes.STRING,
//     isRead: DataTypes.BOOLEAN,
//     img: DataTypes.STRING,
//     added: DataTypes.DATEONLY,
//     comments: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Book',
//   });
//   return Book;
// };
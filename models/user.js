'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Book, { 
      through: "UserBook",
      foreignKey: "userId",
      otherKey: "bookId"
    })
  };
  return User;
};


// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
//       User.belongsToMany(models.Book, {
//         through: "UserBook",
//         foreignKey: "userId",
//         otherKey: "bookId"
//       })
//     }
//   };
//   User.init({
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     pic: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
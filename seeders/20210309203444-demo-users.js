'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [
      {
        name: "Roberto Gomez Bolaños",
        username: "chapulin",
        password: "chipotechillon",
        pic: "https://i.imgur.com/xmgEs1e.jpg"
      },
      {
        name: "Juán Gabriel",
        username: "querida",
        password: "yocanto",
        pic:"https://i.imgur.com/CUzDeal.jpg"
      },
      {
        name: "Maria Julia Lafuente",
        username: "majula",
        password: "noticias",
        pic: "https://i.imgur.com/SF5NvdF.jpg"
      }
     ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
        {
          title:'Lost Paradise',
          author: 'John Milton',
          isbn: "9780140424393",
          genre: "Classic Poetry",
          isRead: false,
          img: "https://i.imgur.com/cyiSX5s.jpg",
          added: "2021-03-05",
          comments: ""
      },
      {
          title:'Choosing Death: the improbable history of Death Metal & Grindcore',
          author: 'Albert Mudrian',
          isbn: "978193590165",
          genre: "History",
          isRead: false,
          img: "https://i.imgur.com/0jdLjmw.jpg",
          added: "2021-03-02",
          comments: ""
      },
      {
          title:'Eloquent JavaScript: a modern introduction to programming',
          author: 'Marijn Haverbeke',
          isbn: "1593272820",
          genre: "Text book",
          isRead: false,
          img: "https://i.imgur.com/Fnx58jW.jpg",
          added: "2021-03-05",
          comments: ""
      },
      {
          title:'Of mice and man',
          author: 'John Steinbeck',
          isbn: "0142000671",
          genre: "Novel",      
          isRead: false,
          img: "https://i.imgur.com/bNR8nDF.jpg",
          added: "2021-03-05",
          comments: ""
      },
      {
          title:'El pastel de chocolate y otros relatos escalofriantes',
          author: 'Rogelio Rosales Ordaz',
          isbn: "9786078195022",
          genre: "Short stories",
          isRead: false,
          img: "https://i.imgur.com/insmPmh.jpg",
          added: "2021-03-06",
          comments: ""
      }
    ], {});   
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Books', null, {});
     
  }
};

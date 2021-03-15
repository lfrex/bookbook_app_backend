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
          comments: "One of the most important epic poems of history!"
      },
      {
          title:'Choosing Death: the improbable history of Death Metal & Grindcore',
          author: 'Albert Mudrian',
          isbn: "978193590165",
          genre: "History",
          isRead: false,
          img: "https://i.imgur.com/0jdLjmw.jpg",
          added: "2021-03-02",
          comments: "Very good option if you want to learn about the most extreme music in th world."
      },
      {
          title:'Eloquent JavaScript: a modern introduction to programming',
          author: 'Marijn Haverbeke',
          isbn: "1593272820",
          genre: "Text book",
          isRead: false,
          img: "https://i.imgur.com/Fnx58jW.jpg",
          added: "2021-03-05",
          comments: "If you want to learn JavaScript, ypu must read this!"
      },
      {
          title:'Of mice and man',
          author: 'John Steinbeck',
          isbn: "0142000671",
          genre: "Novel",      
          isRead: false,
          img: "https://i.imgur.com/bNR8nDF.jpg",
          added: "2021-03-05",
          comments: "Very sad classic of the american best literature."
      },
      {
          title:'El pastel de chocolate y otros relatos escalofriantes',
          author: 'Rogelio Rosales Ordaz',
          isbn: "9786078195022",
          genre: "Short stories",
          isRead: false,
          img: "https://i.imgur.com/insmPmh.jpg",
          added: "2021-03-06",
          comments: "Worst book I've ever read!"
      },
        {
          title:'Fangoria 101 Best horror movies you have never seen',
          author: "Adam Luke",
          isbn: "1400047498",
          genre: "Film critic",
          isRead: false,
          img: "https://i.imgur.com/QTNPjK7.jpg",
          added: "2021-03-14",
          comments: "Very complete, include even foreign films."
      },
      {
        title:'The Dunwich Horror and Others',
        author: "H.P. Loveraft",
        isbn: "0870540387",
        genre: "Novelle",
        isRead: false,
        img: "https://i.imgur.com/azDTrdT.jpg",
        added: "2021-03-14",
        comments: "Best works from the master of horror literature."
    },
    {
      title:'Grava suelta',
      author: "Jaime Muñoz Vargas",
      isbn: "",
      genre: "Short tales",
      isRead: false,
      img: "https://i.imgur.com/Ic62DBN.jpg",
      added: "2021-03-14",
      comments: "Short tales inspired in the every day living in the Mexico \'s frontier."
  },
  {
    title:'De perfil',
    author: "José Agustín",
    isbn: "97807805048",
    genre: "Novel",
    isRead: false,
    img: "https://i.imgur.com/zN4ejuH.jpg",
    added: "2021-03-14",
    comments: "A comming of age in the 60\'s Mexico, very funny at times, mesmerizing."
},
{
  title:'The living dead',
  author: "George A. Romero, Daniel Kraus",
  isbn: "1250305128",
  genre: "Novel",
  isRead: false,
  img: "https://i.imgur.com/A03mW39.jpg",
  added: "2021-03-14",
  comments: "The last work from Romero, explains more about his legacy to the world: the living dead!."
}


    ], {});   
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Books', null, {});
     
  }
};

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      isRead: {
        type: Sequelize.BOOLEAN
      },
      img: {
        type: Sequelize.STRING
      },
      added: {
        type: Sequelize.DATEONLY
      },
      comments: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};
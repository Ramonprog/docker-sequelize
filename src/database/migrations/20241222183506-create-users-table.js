'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('users', { 
        id: {
          type:Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          defaultValue: Sequelize.UUIDV4
        },
        name:{
          type:Sequelize.STRING,
          allowNull: false
        },
        email:{
          type:Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password:{
          type:Sequelize.STRING,
          allowNull: false
        },
        age:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      });
   
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('users');
    
  }
};

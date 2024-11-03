'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Promise.all([
queryInterface.addColumn("Todos","userId",{
  type:Sequelize.INTEGER,
  references:{
    model:"Users",
    key:"id"
  },
  onDelete:"cascade",
  onUpdate:"cascade"
})


      ])
  },

  async down (queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn("Todos","userId")

      ])
  }
};

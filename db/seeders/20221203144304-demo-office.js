"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("office", [
      {
        name: "Diretor de TI",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gerente de TI",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Analista de Sistemas",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Diretor de Operações",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gerente de Operações",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Analista de Operações",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Diretor de Vendas",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gerente de Vendas",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Analista de Vendas",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Diretor de Marketing",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gerente de Marketing",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Analista de Marketing",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Diretor de RH",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gerente de RH",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Analista de RH",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("office", null, {});
  },
};

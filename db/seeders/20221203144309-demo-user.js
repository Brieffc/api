"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user", [
      {
        name: "joao",
        cpf: "3434343",
        office_id: 1,
        uf: "rs",
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "joao",
        cpf: "3434343",
        office_id: 1,
        uf: "rs",
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "joao",
        cpf: "3434343",
        office_id: 1,
        uf: "rs",
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "pedro",
        cpf: "3434343",
        office_id: 2,
        uf: "rs",
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "lucas",
        cpf: "3434343",
        office_id: 3,
        uf: "rs",
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "jose",
        cpf: "3434343",
        office_id: 4,
        uf: "rs",
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};

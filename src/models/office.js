const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../../db/db");

const Office = database.define("Office", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  office: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Office;

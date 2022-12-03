const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../db");

const Office = database.define("office", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Office;

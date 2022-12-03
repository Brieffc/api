const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../../db/db");
const Office = require("./office");

const User = database.define("User", {
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
  cpf: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});
Office.belongsTo(User, {
  constraint: true,
  foreignKey: "idOffice",
});
module.exports = User;

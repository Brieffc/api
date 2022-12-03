const { Sequelize } = require("sequelize");

const database = new Sequelize("api-banco", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  database.authenticate();
  console.log("Connected to the bank successfully!");
} catch (error) {
  console.log(`Unable to connect: ${error}`);
}
database.sync();

module.exports = database;
// { force: true }

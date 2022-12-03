const { Sequelize } = require("sequelize");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

// Run create database statement
connection.query(
  `CREATE DATABASE IF NOT EXISTS company`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);

// Close the connection
connection.end();

const db = new Sequelize("company", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3000,
  charset: "utf8mb4",
  collate: "utf8mb4_general_ci",
  timezone: "-03:00",
});

module.exports = db;

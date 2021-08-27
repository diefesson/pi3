const Sequelize = require("sequelize");
require("dotenv/config");

const sequelize = Sequelize(
  process.env.DB_USER,
  process.env.DB_DATABASE,
  process.env.DB_PASS,
  process.env.DB_PORT,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

sequelize.sync({
    alter: true
});

const db = {};

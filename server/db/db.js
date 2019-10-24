const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/sessions_workshop', {
  logging: false,
});

module.exports = db;

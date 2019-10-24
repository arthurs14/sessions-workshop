const { STRING, UUID, UUIDV4 } = require('sequelize');
const db = require('../db.js');

// TODO: Fill out this model.
const User = db.define('user', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: STRING,
  password: STRING
});

module.exports = User;

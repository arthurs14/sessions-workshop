const User = require('./models/User.js');
const db = require('./db.js');

const syncAndSeed = () => db
  .sync({ force: true })
  .then(async () => {
    const users = [
      { name: 'moe', password: 'MOE' },
      { name: 'curly', password: 'CURLY' }
    ];

    await users.map(user => User.create(user));
    
    return true;
  })
  .catch(e => {
    console.error(e);
  });

module.exports = {
  models: {
    User,
  },
  db,
  syncAndSeed,
};

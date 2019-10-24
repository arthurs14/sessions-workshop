const User = require('./models/User.js');
const db = require('./db.js');

const syncAndSeed = () => db
  .sync({ force: true })
  .then(async () => {
    const users = [
      { name: 'moe', password: 'MOE' },
      { name: 'curly', password: 'CURLY' }
    ];

    const [moe, curly] = await users.map(user => User.create(user));

    return {
      moe,
      curly
    };
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

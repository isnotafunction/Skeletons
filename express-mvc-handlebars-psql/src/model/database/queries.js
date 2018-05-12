const db = require('./db_connection');

const getAll = () => {
  return db.query(`SELECT * FROM users`);
};

module.exports = {
  getAll
};

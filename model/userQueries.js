const findAllUsers = 'SELECT * FROM users;';
const findUserByIdQuery = 'SELECT * FROM users WHERE ?;';
const insertUserQuery = 'INSERT INTO users(username) VALUES(?);';

module.exports = {
  findAllUsers,
  insertUserQuery,
  findUserByIdQuery,
};

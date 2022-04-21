const db = require("../connection.js");

const queryUsers = () => {
  const users = db
    .query(`SELECT * FROM Users`)
    .then((res) => {
      console.log(res);
      return res.rows;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
  return users;
};

module.exports = queryUsers;

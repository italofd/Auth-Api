const db = require("../connection.js");

const findUserByEmail = (email) => {
  const user = db
    .query(`SELECT * FROM Users WHERE email = '${email}'`)
    .then((res) => {
      const resultUser = res.rows[0];
      return resultUser;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
  return user;
};
module.exports = findUserByEmail;

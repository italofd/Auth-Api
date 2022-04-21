const db = require("../connection");

const deleteAllUsers = () => {
  db.query(`DROP TABLE Users;`, (err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err.message);
    }
  });
};

deleteAllUsers();

module.exports = deleteAllUsers;

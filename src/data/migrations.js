const db = require("./connection.js");

const createUserTable = () => {
  db.query(
    `CREATE TABLE IF NOT EXISTS Users(
  id SERIAL,
  name VARCHAR(64) NOT NULL,
  password VARCHAR(128) NOT NULL,
  email VARCHAR(64) NOT NULL
  )`,
    (err, res) => {
      if (!err) {
        console.log(res);
      } else {
        console.log(err.message);
      }
    }
  );
};
createUserTable();

module.exports = createUserTable;

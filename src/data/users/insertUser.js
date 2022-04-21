const db = require("../connection.js");

const insertUser = (data, passwordHash) => {
  db.query(
    `INSERT INTO Users(name, password, email) VALUES('${data.name}', '${passwordHash}', '${data.email}');`,
    (err, res) => {
      if (!err) {
        console.log(res.message);
      } else {
        console.log(err.message);
      }
    }
  );
};

module.exports = insertUser;

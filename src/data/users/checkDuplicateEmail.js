const queryUsers = require("./queryUsers");
const db = require("../connection.js");


const checkDuplicateEmail = async (email) => {
  console.log(email);
  const findEmail = await db
    .query(`SELECT email FROM Users WHERE email = '${email}'`)
    .then((res) => {
      if (res.rowCount !== 0) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
  return findEmail;
  // const data = await queryUsers();
  // const allEmails = [];
  // const mapUsersEmails = data.map((user) => {
  //   allEmails.push(user.email);
  // });
  // const check = allEmails.includes(email);
  // return check;
};

module.exports = checkDuplicateEmail;

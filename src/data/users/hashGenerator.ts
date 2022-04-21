const bcrypt = require("bcryptjs");

const generateHash = (password: string) => {
  try {
    const result = bcrypt.hashSync(password, 5);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

module.exports = generateHash;

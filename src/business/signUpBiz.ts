const insertUser = require("../data/users/insertUser.js");
const checkDuplicateEmail = require("../data/users/checkDuplicateEmail.js");
const generateHash = require("../data/users/hashGenerator");

export interface userDTO {
  email: string;
  password: string;
  name: string;
}

const signUpBiz = async (input: userDTO) => {
  try {
    const checkEmail = await checkDuplicateEmail(input.email);
    if (checkEmail === true) {
      throw new Error("Email already registered");
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(input.email)) {
      throw new Error("Invalid Email");
    }

    if (input.password.length < 6 || input.password.length > 30) {
      throw new Error("Invalid Password");
    }

    const passwordHash = await generateHash(input.password);
    await insertUser(input, passwordHash);
    return "User registered successfully";
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default signUpBiz;

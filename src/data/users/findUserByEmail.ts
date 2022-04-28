import { User } from "../../interfaces/User";
const db = require("../connection.js");

const findUserByEmail = async (email: string): Promise<User> => {
	return await db
		.query(`SELECT * FROM Users WHERE email = '${email}'`)
		.then((res: any) => {
			console.log(email);
			console.log(res);
			const resultUser = res.rows[0] as User;
			console.log(resultUser);
			return resultUser;
		})
		.catch((err: any) => {
			throw new Error(err.message);
		});
};

export default findUserByEmail;

import { User } from "../../interfaces/User";
const db = require("../connection.js");

const findUserByEmail = async (email: string): Promise<User | undefined> => {
	return await db
		.query(`SELECT * FROM Users WHERE email = '${email}'`)
		.then((res: any) => {
			const resultUser = res.rows[0] as User;
			return resultUser;
		})
		.catch((err: any) => {
			throw new Error(err.message);
		});
};

export default findUserByEmail;

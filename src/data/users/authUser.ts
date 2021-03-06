import generateJWT from "./generateJWT";
const bcrypt = require("bcryptjs");
import findUserByEmail from "./findUserByEmail";

export interface userDTO {
	email: string;
	password: string;
	name: string;
}

const authUser = async (email: string, password: string) => {
	try {
		const user = await findUserByEmail(email);
		console.log(user);
		if (!user) {
			throw new Error("Email not registered");
		} else {
			const comparePassword = await bcrypt.compareSync(password, user.password);
			if (!comparePassword) {
				throw new Error("Wrong Password");
			} else {
				const token = generateJWT(email, user.uid);
				return token;
			}
		}
	} catch (error: any) {
		throw new Error(error.message);
	}
};

module.exports = authUser;

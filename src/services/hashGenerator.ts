const bcrypt = require("bcryptjs");

const generateHash = (password: string): string => {
	try {
		const result = bcrypt.hashSync(password, 5);
		return result as string;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export default generateHash;

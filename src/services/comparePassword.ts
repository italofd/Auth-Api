const bcrypt = require("bcryptjs");

export const comparePassword = (password: string, hash: string): Boolean => {
	const comparePassword = bcrypt.compareSync(password, hash);
	return comparePassword;
};

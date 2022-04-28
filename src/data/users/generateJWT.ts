import { sign, SignOptions } from "jsonwebtoken";
const dotenv = require("dotenv");

const generateJWT = (userName: string, userId: string) => {
	try {
		const payload = {
			name: userName,
			id: userId,
			accesTypes: ["getData", "addData", "updateData", "deleteData"],
		};

		const secretKey = process.env.JWT_SECRET as string;

		const signOptions: SignOptions = {
			algorithm: "HS256",
			expiresIn: "30min",
		};

		return sign(payload, secretKey, signOptions);
	} catch (err: any) {
		throw new Error(err.message);
	}
};

export default generateJWT;

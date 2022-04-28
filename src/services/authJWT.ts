import { JwtPayload, sign, SignOptions, verify } from "jsonwebtoken";
const dotenv = require("dotenv");

const secretKey = process.env.JWT_SECRET as string;

const generateJWT = (id: string): string => {
	const signOptions: SignOptions = {
		algorithm: "HS256",
		expiresIn: "60min",
	};

	const token = sign({ id: id }, secretKey, signOptions);

	return token;
};

const getTokenData = (token: string): String | JwtPayload => {
	const payload = verify(token, secretKey);

	return payload;
};

export { generateJWT, getTokenData };

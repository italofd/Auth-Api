import { UserDTO } from "../../interfaces/UserDTO";

const db = require("../connection.js");

const insertUser = (data: UserDTO, passwordHash: string): void => {
	db.query(
		`INSERT INTO Users(id, name, password, email) VALUES('${data.uid}','${data.name}', '${passwordHash}', '${data.email}');`,
		(err: any, res: any) => {
			if (!err) {
				console.log(res.message);
			} else {
				console.log(err.message);
			}
		}
	);
};

export default insertUser;

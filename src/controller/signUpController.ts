import { Request, Response } from "express";
import signUpBiz from "../business/signUpBiz";
import insertUser from "../data/users/insertUser";
import generateHash from "../services/hashGenerator";
import { idGenerator } from "../services/idGenerator";
import { emailDuplicateValidator } from "../utils/emailDuplicateValidator";
import { validateEmail } from "../utils/validateEmail";

const signUpController = async (req: Request, res: Response) => {
	try {
		const { email, password, name, nickname } = req.body;
		const uid = idGenerator();
		const data = await signUpBiz(
			{ uid, password, email, name, nickname },
			validateEmail,
			emailDuplicateValidator,
			generateHash,
			insertUser
		);
		console.log(data);
		return res.send({ message: "Success", status: 200, data });
	} catch (error: any) {
		res.send({ status: "Failed", error: error.message });
	}
};

export default signUpController;

import { inputValidator } from "../utils/inputValidator";
import { UserDTO } from "../interfaces/UserDTO";
import { User } from "../interfaces/User";

const signUpBiz = async (
	input: UserDTO,
	validateEmail: (email: string) => string,
	emailDuplicateValidator: (email: string) => any,
	generateHash: (password: string) => string,
	insertUser: (user: UserDTO, passwordHash: string) => void
) => {
	try {
		inputValidator(input.email, "Email");
		inputValidator(input.password, "Password");
		inputValidator(input.name, "Name");
		inputValidator(input.nickname, "Nickname");

		validateEmail(input.email);

		await emailDuplicateValidator(input.email);

		if (input.password.length < 6 || input.password.length > 30)
			throw new Error("Invalid Password");

		const passwordHash = generateHash(input.password);

		await insertUser(input, passwordHash);

		const user = {
			name: input.name,
			email: input.email,
		};

		return user;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export default signUpBiz;

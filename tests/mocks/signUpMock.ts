import { UserDTO } from "../../src/interfaces/UserDTO";
import signUpBiz from "../../src/business/signUpBiz";
import validateEmail from "../../src/utils/validateEmail";
import { idGeneratorMock } from "./idGeneratorMock";
import { User } from "../../src/interfaces/User";
import { generateHashMock } from "./generateHashMock";

const signUpMock = (input: UserDTO) => {
	console.log(input);
	const insertUser = async (
		data: UserDTO,
		passwordHash: string
	): Promise<void> => {};
	const user = {
		uid: idGeneratorMock(),
		name: input.name,
		nickname: input.nickname,
		email: input.email,
		password: input.password,
	} as User;

	const emailDuplicateValidator = async (email: string): Promise<User> => user;

	const token = signUpBiz(
		user,
		validateEmail,
		emailDuplicateValidator,
		generateHashMock,
		insertUser
	);

	return token;
};

export default signUpMock;

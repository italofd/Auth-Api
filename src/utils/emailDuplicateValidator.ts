import findUserByEmail from "../data/users/findUserByEmail";

export const emailDuplicateValidator = async (
	email: string
): Promise<string | boolean> => {
	try {
		const user = await findUserByEmail(email);
		if (user) throw new Error("Email already registered");
		return false;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

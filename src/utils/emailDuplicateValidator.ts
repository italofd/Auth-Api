import findUserByEmail from "../data/users/findUserByEmail";

export const emailDuplicateValidator = async (email: string): Promise<any> => {
	try {
		const user = await findUserByEmail(email);
		if (user) throw new Error("Email already registered");
	} catch (error: any) {
		throw new Error(error.message);
	}
};

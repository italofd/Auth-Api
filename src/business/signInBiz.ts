//Fazer um hash quando pessoa mandar a senha, depois compara com a hash no banco de dados;
//Comparar hash do bcrypt
const authUser = require("../data/users/authUser");

export interface SignInDTO {
	email: string;
	password: string;
}

const signInBiz = async (input: SignInDTO) => {
	try {
		const token = await authUser(input.email, input.password);
		return token;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export default signInBiz;

//Sempre vai ter uma suite de testes, um conjunto
//Começa com describe
//depois usar test ou it
//Fazer suite de taste do signup um caso de It(cada it tem que realizar um e apenas um teste) e de sucess(expect)
import { idGeneratorMock } from "./mocks/idGeneratorMock";
import signUpMock from "./mocks/signUpMock";

describe("Authentication test suite", () => {
	it("Uid should return a string with the right format", () => {
		const uid = idGeneratorMock();
		expect(uid).toBe("uuid");
	});

	it("Should return missing field error.", async () => {
		try {
			const user = {
				uid: idGeneratorMock(),
				name: "",
				email: "john.coltrane@hotmail.com",
				password: "qwe123",
				nickname: "Coltrane",
			};
			await signUpMock(user);
		} catch (error) {
			if (error instanceof Error) {
				expect(error.message).toBe("Name field is empty.");
			}
		}
	});
	it("Should return missing field error", async () => {
		try {
			const user = {
				uid: idGeneratorMock(),
				name: "John Coltrane",
				email: "",
				password: "qwe123",
				nickname: "Coltrane",
			};
			await signUpMock(user);
		} catch (error) {
			if (error instanceof Error) {
				expect(error.message).toBe("Email field is empty.");
			}
		}
	});
	it("Should return a missing field error", async () => {
		try {
			const user = {
				uid: idGeneratorMock(),
				name: "John Coltrane",
				email: "john.coltrane@hotmail.com",
				password: "",
				nickname: "Coltrane",
			};
			await signUpMock(user);
		} catch (error) {
			if (error instanceof Error) {
				expect(error.message).toBe("Password field is empty.");
			}
		}
	});
	it("Should return a missing field error", async () => {
		try {
			const user = {
				uid: idGeneratorMock(),
				name: "John Coltrane",
				email: "john.coltrane@hotmail.com",
				password: "qwe123",
				nickname: "",
			};
			await signUpMock(user);
		} catch (error) {
			if (error instanceof Error) {
				expect(error.message).toBe("Nickname field is empty.");
			}
		}
	});
	it("Should return an invalid email error", async () => {
		try {
			const user = {
				uid: idGeneratorMock(),
				name: "John Coltrane",
				email: "john.coltrane.@hotmail.com",
				password: "qwe123",
				nickname: "Coltrane",
			};
			await signUpMock(user);
		} catch (error) {
			if (error instanceof Error) {
				expect(error.message).toBe("Invalid Email");
			}
		}
	});
	// it("Should return an invalid password error", async () => {
	// 	try {
	// 		const user = {
	// 			uid: idGeneratorMock(),
	// 			name: "John Coltrane",
	// 			email: "john.coltrane@hotmail.com",
	// 			password: "qwe",
	// 			nickname: "Coltrane",
	// 		};
	// 		await signUpMock(user);
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			expect(error.message).toContain("Invalid Password");
	// 		}
	// 	}
	// });
});

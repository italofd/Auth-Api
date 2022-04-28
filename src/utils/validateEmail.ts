const validateEmail = (email: string): string => {
	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!emailRegex.test(email)) {
		throw new Error("Invalid Email");
	}

	return email;
};

export default validateEmail;

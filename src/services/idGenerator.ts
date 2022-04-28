import { v4 } from "uuid";

export const idGenerator = (): string => {
	const uid: string = v4();
	return uid;
};

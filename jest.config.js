module.exports = {
	roots: ["./tests"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "js", "json", "node"],
};

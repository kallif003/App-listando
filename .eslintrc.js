module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		"react-native/react-native": true,
	},
	extends: [
		"plugin:react/recommended",
		"google",
		"plugin:prettier/recommended",
		"plugin:react/jsx-runtime",
		"plugin:storybook/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
	},
	plugins: ["@typescript-eslint", "prettier", "react", "react-native"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"require-jsdoc": [
			"error",
			{
				require: {
					FunctionDeclaration: false,
					MethodDefinition: false,
					ClassDeclaration: false,
					ArrowFunctionExpression: false,
					FunctionExpression: false,
				},
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
}

/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
		"@vue/prettier",
		"@vue/eslint-config-prettier",
		"plugin:prettier/recommended",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		"vue/multi-word-component-names": "off",
		"no-undef": "off",
		"prettier/prettier": "error",
	},
};

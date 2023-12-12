module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:eslint-plugin/recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				printWidth: 80,
				tabWidth: 4,
				useTabs: true,
				semi: false,
				singleQuote: true,
				jsxSingleQuote: true,
				trailingComma: 'es5',
				endOfLine: 'auto',
			},
		],
	},
}

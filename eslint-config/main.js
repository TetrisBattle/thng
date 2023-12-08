const base = require('./src/rules/base')
const prettier = require('./src/rules/prettier')
const react = require('./src/rules/react')

module.exports = {
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es2021: true,
		jest: true,
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
		ecmaFeatures: { jsx: true },
	},
	plugins: ['react-refresh'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		...base,
		...prettier,
		...react,
	},
}

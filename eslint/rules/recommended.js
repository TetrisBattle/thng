const { prettier } = require('./prettier.js')

exports.recommended = {
	root: true,
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
	},
	rules: {
		'no-debugger': 'warn',
		'no-console': ['warn', { allow: ['error'] }],
		...prettier,
	},
}

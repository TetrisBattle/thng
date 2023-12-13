exports.base = {
	root: true,
	extends: ['eslint:recommended'],
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
		'no-unused-vars': 'warn',
		'no-debugger': 'warn',
		// 'no-console': ['warn', { allow: ['error'] }],
	},
}

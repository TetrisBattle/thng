exports.typescript = {
	extends: ['plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-undef': 'off',
	},
}

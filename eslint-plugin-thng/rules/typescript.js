exports.typescript = {
	extends: ['plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	rules: {
		'no-undef': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
}

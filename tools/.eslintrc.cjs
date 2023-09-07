module.exports = {
	extends: ['@thng', 'plugin:react/recommended'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'warn',
		'react/react-in-jsx-scope': 'error',
		'react/display-name': 'off',
	},
}

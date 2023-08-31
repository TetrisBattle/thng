module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'prettier/prettier': 'warn',
		'no-debugger': 'warn',
		'no-console': ['warn', { allow: ['error'] }],
		'@typescript-eslint/no-empty-function': 'warn',
		'react/react-in-jsx-scope': 'error',
		'@typescript-eslint/no-unused-vars': 'warn',
		'react/display-name': 'off',
	},
}

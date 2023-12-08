export const configs = {
	recommended: {
		extends: [
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:prettier/recommended',
		],
		parser: '@typescript-eslint/parser',
		root: true,
		env: {
			node: true,
			es6: true,
		},
		parserOptions: {
			ecmaVersion: 2021,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
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
	},
}

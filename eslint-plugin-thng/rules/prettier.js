exports.prettier = {
	extends: ['plugin:prettier/recommended'],
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

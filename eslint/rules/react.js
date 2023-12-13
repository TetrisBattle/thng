exports.react = {
	extends: ['plugin:react-hooks/recommended'],
	plugins: ['react-refresh'],
	env: {
		browser: true,
		jest: true,
	},
	parserOptions: {
		ecmaFeatures: { jsx: true },
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	ignorePatterns: ['dist'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
}

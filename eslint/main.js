'use strict'

const base = require('./rules/base')
const prettier = require('./rules/prettier')
const react = require('./rules/react')

module.exports = {
	configs: {
		recommended: {
			root: true,
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:prettier/recommended',
			],
			parserOptions: {
				ecmaVersion: 2021,
			},
			rules: {
				'@typescript-eslint/no-unused-vars': 'warn',
				...prettier,
			},
		},
		react: {
			env: {
				browser: true,
				node: true,
				commonjs: true,
				es2021: true,
				jest: true,
			},
			ignorePatterns: ['dist'],
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
		},
	},
}

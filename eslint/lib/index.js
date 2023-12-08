/**
 * @fileoverview eslint
 * @author Thien
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
	configs: {
		recommended: {
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:prettier/recommended',
			],
			rules: {
				'@typescript-eslint/no-unused-vars': 'warn',
				'no-console': 'warn',
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
	},
}

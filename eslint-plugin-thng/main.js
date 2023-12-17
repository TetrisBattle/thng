'use strict'

const { base } = require('./rules/base.js')
const { typescript } = require('./rules/typescript.js')
const { react } = require('./rules/react.js')
const { prettier } = require('./rules/prettier.js')

module.exports = {
	configs: {
		base: base,
		typescript: typescript,
		react: react,
		prettier: prettier,

		recommended: {
			extends: ['plugin:thng/base', 'plugin:thng/prettier'],
		},
		recommendedTs: {
			extends: [
				'plugin:thng/base',
				'plugin:thng/typescript',
				'plugin:thng/prettier',
			],
		},
		recommendedReact: {
			extends: [
				'plugin:thng/base',
				'plugin:thng/typescript',
				'plugin:thng/react',
				'plugin:thng/prettier',
			],
		},
	},
}

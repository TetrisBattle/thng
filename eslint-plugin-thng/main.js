'use strict'

const { deepMerge } = require('./utils.js')
const { base } = require('./rules/base.js')
const { typescript } = require('./rules/typescript.js')
const { react } = require('./rules/react.js')
const { prettier } = require('./rules/prettier.js')

module.exports = {
	configs: {
		recommended: deepMerge({}, base, prettier),
		recommendedTs: deepMerge({}, base, typescript, prettier),
		recommendedReact: deepMerge({}, base, typescript, react, prettier),

		base: base,
		typescript: typescript,
		react: react,
		prettier: prettier,
	},
}

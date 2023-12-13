'use strict'

const { deepMerge } = require('./utils.js')
const { recommended } = require('./rules/recommended.js')
const { typescript } = require('./rules/typescript.js')
const { react } = require('./rules/react.js')

module.exports = {
	configs: {
		recommended: recommended,
		ts: deepMerge({}, typescript, recommended),
		react: deepMerge({}, typescript, react, recommended),
	},
}

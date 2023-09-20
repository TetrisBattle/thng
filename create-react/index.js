#!/usr/bin/env node

import { execSync } from 'child_process'
import path from 'path'

// function nameIsRequired() {
// 	if (!process.argv[2]) {
// 		console.log('Name is required!\n')

// 		console.log('Examples: ')
// 		console.log('- npx @thng/react .')
// 		console.log('- npx @thng/react client-app')
// 		process.exit(1)
// 	}
// }

const gitRepo = 'https://github.com/TetrisBattle/client-app.git'
const disableEcho = { stdio: 'ignore' }

const currentPath = process.cwd()
const projectName = process.argv[2] ?? '.'
const projectPath = path.join(currentPath, projectName)

async function main() {
	try {
		execSync(`git clone --depth 1 ${gitRepo} ${projectPath}`, disableEcho)

		process.chdir(projectPath)
		execSync('npx rimraf .git')
		execSync('git init')
		execSync('git add .')
		execSync('git commit -m "init')
	} catch (error) {
		console.log(error)
	}
}

main()

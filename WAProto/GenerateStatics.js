import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const cwd = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(cwd, '..')
const pbjsBin = resolve(repoRoot, 'node_modules/protobufjs-cli/bin/pbjs')
const pbtsBin = resolve(repoRoot, 'node_modules/protobufjs-cli/bin/pbts')

const run = (command, args, options = {}) => {
	const result = spawnSync(command, args, {
		cwd,
		stdio: 'inherit',
		...options
	})

	if (result.error) {
		throw result.error
	}

	if (result.status !== 0) {
		process.exit(result.status ?? 1)
	}

	return result
}

run(process.execPath, [
	pbjsBin,
	'-t',
	'static-module',
	'--no-beautify',
	'-w',
	'es6',
	'--no-bundle',
	'--no-delimited',
	'--no-verify',
	'--no-comments',
	'-o',
	'./index.js',
	'./WAProto.proto'
])

const declarationOutput = spawnSync(
	process.execPath,
	[
		pbjsBin,
		'-t',
		'static-module',
		'--no-beautify',
		'-w',
		'es6',
		'--no-bundle',
		'--no-delimited',
		'--no-verify',
		'./WAProto.proto'
	],
	{
		cwd,
		encoding: 'utf8',
		maxBuffer: 1024 * 1024 * 64
	}
)

if (declarationOutput.error) {
	throw declarationOutput.error
}

if (declarationOutput.status !== 0) {
	process.stderr.write(declarationOutput.stderr ?? '')
	process.exit(declarationOutput.status ?? 1)
}

run(
	process.execPath,
	[pbtsBin, '--no-comments', '-o', './index.d.ts', '-'],
	{
		input: declarationOutput.stdout,
		stdio: ['pipe', 'inherit', 'inherit']
	}
)

run(process.execPath, [resolve(cwd, 'fix-imports.js')])

import {Compiler} from './src/Compiler.js';
import fs from 'fs';
import {CompilationError} from './src/Exceptions/CompilationError.js';

try {
	if (process.argv.length !== 3) {
		throw new Error('Invalid target!');
	}

	let js = "";
	const compiler = new Compiler(process.argv[process.argv.length - 1]);

	try{
		print(await compiler.Compile());
	} catch (e) {

		if (e instanceof CompilationError) {
			throw new Error(`Compilation error on line ${compiler.Index + 1}:\n${e?.message ?? e}\n> ${compiler.Line}\n>> ${compiler.Unconsumed}`);
		}

		throw e;
	}

	console.log(`Successfully compiled: ${compiler.Index} lines(s)!`);
	// fs.writeFileSync('dist/output.js', js);
	// console.log(`Running ...\n`);
	// eval(js);
}catch (e) {
	console.error(e.message);
}

function print(output, prefix = "") {
	for (const target of output) {
		console.log(`${prefix}>${target.constructor.name} ${target.Content}`);

		if (target.Length > 0) {
			print(target.Children, prefix + "\t");
		}
	}
}
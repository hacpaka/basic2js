import {Compiler} from './src/Compiler.js';
import {CompilationError} from './src/Exceptions/CompilationError.js';

await (async (target) => {
	try {
		if (!target) {
			throw new Error('Invalid target!');
		}

		const compiler = new Compiler(target);

		try {
			await compiler.Compile();
		} catch (e) {

			if (e instanceof CompilationError) {
				throw new Error(`Compilation error on line ${compiler.Index + 1}:\n${e?.message ?? e}\n> ${compiler.Line}\n>> ${compiler.Unconsumed}`);
			}

			throw e;
		}

		console.log(`Successfully compiled: ${compiler.Index} lines(s)!`);
		print(compiler.Nodes);

	} catch (e) {
		console.error(e?.message ?? e);
	}
})(...process.argv.slice(2));

function print(output, prefix = "") {
	for (const target of output) {
		console.log(`${prefix}>${target.constructor.name} ${target.Content}`);

		if (target.Length > 0) {
			print(target.Children, prefix + "\t");
		}
	}
}
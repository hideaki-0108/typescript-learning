import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

type SolveFn = (input: string) => string;

function usage(): never {
  // bun run src/runner.ts <path-to-problem.ts>
  // npm scripts: bun run solve -- src/problems/a/a-15.ts
  // NOTE: keep output minimal for AtCoder-like judges
  throw new Error('Usage: bun run src/runner.ts <problem-file-path>');
}

const problemPathArg = process.argv[2];
if (!problemPathArg) usage();

const absProblemPath = path.resolve(process.cwd(), problemPathArg);
const mod = await import(pathToFileURL(absProblemPath).href);

const solve: unknown = mod.solve;
if (typeof solve !== 'function') {
  throw new Error(`Export 'solve(input: string): string' was not found in ${problemPathArg}`);
}

const input = fs.readFileSync(0, 'utf8');
const output = (solve as SolveFn)(input);
process.stdout.write(output);


import { readFileSync } from 'fs';
import { join } from 'path';

export function loadFixture(problemId: string, testCase: number) {
  const fixturesDir = join(__dirname, '../fixtures', problemId);
  const input = readFileSync(
    join(fixturesDir, `input${testCase}.txt`),
    'utf-8'
  );
  const output = readFileSync(
    join(fixturesDir, `output${testCase}.txt`),
    'utf-8'
  );
  return { input, output };
}

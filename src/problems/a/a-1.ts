export function solve(input: string): string {
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0).toString();
}

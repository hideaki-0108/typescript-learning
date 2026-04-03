/**
 * 問題: https://atcoder.jp/contests/abc159/tasks/abc159_a
 */
export const solve = (N: number, M: number): number => {
  const result = (N * (N - 1)) / 2 + (M * (M - 1)) / 2;
  return result === -0 ? 0 : result;
};

/**
 * 問題: 偶数・奇数判定
 * 与えられた整数が偶数か奇数かを判定する
 * 偶数の場合は "Even"、奇数の場合は "Odd" を出力する
 *
 * 制約
 * -1000 <= N <= 1000
 * Nは整数
 *
 * 入力例
 * '4'
 *
 * 期待する出力
 * 'Even'
 */

export const solve = (input: string): string => {
  const N = parseInt(input.trim());
  return N % 2 === 0 ? "Even" : "Odd";
}; 
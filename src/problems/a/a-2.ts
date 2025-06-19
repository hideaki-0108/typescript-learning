/**
 * 問題
 * 与えられた配列から重複する要素を除去し、昇順でソートして返す
 * なお入力値は必ず文字列で与えられる
 *
 * 制約
 * 1 <= N <= 100000
 * 1 <= A_i <= 100000
 *
 * 入力例
 * '3 1 4 1 5 9 2 6 5 3'
 *
 * 期待する出力
 * '1 2 3 4 5 6 9'
 */

export const solve = (input: string): string => {
  // 入力値をスペースで分割、配列に格納する
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);
  // 重複を除去する
  const uniqueNumbers = [...new Set(numbers)];
  // 昇順でソートする
  const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
  // 結果をスペースで結合して返す
  return sortedNumbers.join(' ');
};

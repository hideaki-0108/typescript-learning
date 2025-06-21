/**
 * 問題: 配列の偶数要素の個数
 * 与えられた配列の中で偶数の要素の個数を数えて返す
 * なお入力値は必ず文字列で与えられる
 *
 * 制約
 * 1 <= N <= 100000
 * 1 <= A_i <= 100000
 *
 * 入力例
 * '5 3 1 4 1 5 9 2 6 5 3'
 *
 * 期待する出力
 * '3'
 * (4, 2, 6が偶数なので3個)
 */

export const solve = (input: string): string => {
  // 入力値をスペースで分割、配列に格納する
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);

  // 偶数の要素をフィルタリングして個数を数える
  const evenCount = numbers.filter((num) => num % 2 === 0).length;

  // 結果を文字列で返す
  return evenCount.toString();
};

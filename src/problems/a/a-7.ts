/**
 * 問題: 文字列の回文判定
 * 与えられた文字列が回文（前から読んでも後ろから読んでも同じ）かどうかを判定する
 * 大文字小文字は区別せず、スペースは無視する
 *
 * 制約
 * 1 <= 文字列の長さ <= 100
 * 文字列は英字とスペースのみ
 *
 * 入力例
 * 'A man a plan a canal Panama'
 *
 * 期待する出力
 * 'Yes' (回文の場合)
 * 'No' (回文でない場合)
 */

export const solve = (input: string): 'Yes' | 'No' => {
  const trimInput = input.split(' ').join('').trim().toLowerCase();
  const reverseInput = trimInput.split('').reverse().join('');

  if (trimInput === reverseInput) {
    return 'Yes';
  }

  return 'No';
};

/**
 * 問題: 温度変換
 * 摂氏温度（Celsius）を華氏温度（Fahrenheit）に変換する
 * 変換式: F = C × 9/5 + 32
 * 結果は小数点以下を切り捨てて整数で返す
 *
 * 制約
 * -100 <= C <= 100
 *
 * 入力例
 * '25'
 *
 * 期待する出力
 * '77'
 * (25 × 9/5 + 32 = 77)
 */

export const solve = (input: string): string => {
  const c: number = Number(input);
  const f: number = (c * 9) / 5 + 32;
  const ans: string = f.toString();

  return ans;
};

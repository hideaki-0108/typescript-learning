/**
 * 問題: お菓子の分配
 * N人の子供にM個のお菓子を分配する
 * 各子供は最低1個、最大K個までお菓子をもらえる
 * 全てのお菓子を配り切ることができるかを判定する
 *
 * 制約
 * 1 <= N <= 1000
 * 1 <= M <= 100000
 * 1 <= K <= 100
 *
 * 入力例
 * n = 3
 * m = 10
 * k = 4
 * (3人の子供に10個のお菓子を、1人最大4個まで分配)
 *
 * 期待する出力
 * 'Yes' (分配可能な場合)
 * 'No' (分配不可能な場合)
 */

export const distributeCandy = (
  n: number,
  m: number,
  k: number
): 'Yes' | 'No' => {
  if (m < n) return 'No';

  const average = m / n;

  if (average > k) return 'No';

  return 'Yes';
};

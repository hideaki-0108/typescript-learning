/**
 * 問題: 数字の桁数カウント
 * N個の正の整数が与えられる
 * 各数字について、桁数ごとの個数を数えて出力する
 * 1桁、2桁、3桁、4桁以上の個数をそれぞれ求める
 *
 * 制約
 * 1 <= N <= 1000
 * 1 <= A_i <= 10000
 *
 * 入力例
 * '6 5 123 7 45 8901 12'
 *
 * 期待する出力
 * '2 2 1 1'
 * (1桁: 5,7の2個、2桁: 45,12の2個、3桁: 123の1個、4桁以上: 8901の1個)
 */

export const solve = (input: string): string => {
  const [, ...numbers] = input.trim().split(/\s+/);
  const ansArr: number[] = [0, 0, 0, 0];

  numbers.map((number: string) => {
    const length = number.length;
    switch (length) {
      case 1:
        ansArr[0] += 1;
        break;
      case 2:
        ansArr[1] += 1;
        break;
      case 3:
        ansArr[2] += 1;
        break;
      default:
        ansArr[3] += 1;
        break;
    }
  });

  const answer: string = ansArr.map((ans: number) => ans.toString()).join(' ');

  return answer;
};

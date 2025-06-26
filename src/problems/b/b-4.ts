/**
 * 問題: 座標の距離計算
 * 2次元平面上のN個の点が与えられる
 * 原点(0,0)から各点までのユークリッド距離を計算し、
 * 距離が最も近い点と最も遠い点のインデックス（1から始まる）を出力する
 * 距離が同じ場合は、インデックスが小さい方を選ぶ
 *
 * 制約
 * 1 <= N <= 100
 * -100 <= x_i, y_i <= 100
 *
 * 入力例
 * '4
 * 1 1
 * 3 4
 * 0 5
 * 2 0'
 *
 * 期待する出力
 * '1 2'
 * (最も近い: 1番目の点(1,1)、距離√2、最も遠い: 2番目の点(3,4)、距離5)
 */

export const solve = (input: string): string => {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);

  let minDistance = Infinity;
  let maxDistance = -1;
  let minIndex = 1;
  let maxIndex = 1;

  for (let i = 1; i <= n; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    const distance = Math.sqrt(x * x + y * y);

    if (distance < minDistance || (distance === minDistance && i < minIndex)) {
      minDistance = distance;
      minIndex = i;
    }

    if (distance > maxDistance || (distance === maxDistance && i < maxIndex)) {
      maxDistance = distance;
      maxIndex = i;
    }
  }

  return `${minIndex} ${maxIndex}`;
};

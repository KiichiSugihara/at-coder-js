'use strict';
import * as fs from 'fs';
import 'core-js';

// inputに入力データ全体が入る
function main(input_raw) {
  const input = input_raw.split('\n');
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const N = Number(input[0].split(' ')[0]);
  const skillCounts = Number(input[0].split(' ')[1]);
  const monstersHP = input[1].split(' ').map(Number);
  //出力
  const sortDesc = monstersHP.sort(function(a, b) {
    return b - a;
  });
  let sum = 0;
  for (let i = skillCounts; i < N; i++) {
    sum += sortDesc[i];
  }
  console.log(sum);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

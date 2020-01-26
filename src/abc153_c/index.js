'use strict';
import * as fs from 'fs';
import 'core-js';
import bigInt from 'big-integer';

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs0 = input.split('\n')[0].split(' ');
  const monstersHP = input.split('\n')[1].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const n = parseInt(inputs0[0], 10);
  const skillCounts = parseInt(inputs0[1], 10);
  //出力
  monstersHP.sort();
  let sum = bigInt(0);
  for (let i = 0; i < n - skillCounts; i++) {
    sum = bigInt(sum).plus(monstersHP[i]);
  }
  console.log(bigInt(sum).toString());
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

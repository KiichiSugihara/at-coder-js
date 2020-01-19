'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs0 = input.split('\n')[0].split(' ');
  const Ps = input.split('\n')[1].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const N = parseInt(inputs0[0], 10);
  let counter = 0;
  let min = N + 1;
  for (let i = 0; i < N; i++) {
    if (Number(Ps[i]) <= min) {
      min = Ps[i];
      counter++;
    }
  }
  console.log(counter);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

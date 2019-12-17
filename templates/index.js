'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs = input.split('\n')[0].split(' ');
  console.log(inputs);
  //文字列から10進数に変換するときはparseIntを使います
  const a1 = parseInt(inputs[0], 10);
  const a2 = parseInt(inputs[1], 10);
  const a3 = parseInt(inputs[2], 10);
  //出力
  console.log(a1, a2, a3);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

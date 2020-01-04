'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const a = Number(input.split('\n')[0].split(' '));
  const b = Number(input.split('\n')[1].split(' '));
  const sum = a + b;
  if (sum === 3) {
    console.log(3);
  } else if (sum === 4) {
    console.log(2);
  } else {
    console.log(1);
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

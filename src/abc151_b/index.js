'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs0 = input.split('\n')[0].split(' ');
  const tests = input.split('\n')[1].split(' ');

  //出力
  const goalSum = Number(inputs0[0]) * Number(inputs0[2]);
  let sum = 0;
  tests.forEach(v => {
    sum = sum + Number(v);
  });
  const restPoint = goalSum - sum;

  if (restPoint > Number(inputs0[1])) {
    console.log(-1);
  } else if (restPoint < 0) {
    console.log(0);
  } else {
    console.log(restPoint);
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

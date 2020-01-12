'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

function atCoder(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const input0 = input.split('\n')[0].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const problem = parseInt(input0[0], 10);
  const challenge = parseInt(input0[1], 10);
  let correct = 0;
  let error = 0;
  if (challenge === 0) {
    return '0 ' + '0';
  }
  // 早くする
  const inputs = input.split('\n');
  let counter = [];
  for (let i = 1; i < inputs.length - 1; i++) {
    const check = inputs[i].split(' ');
    if (counter.includes(check[0])) {
      continue;
    } else if (check[1] == 'WA') {
      error = error + 1;
    } else {
      counter.push(check[0]);
      correct = correct + 1;
    }
  }
  return correct + ' ' + error;
}

// inputに入力データ全体が入る
function main(input) {
  //出力
  console.log(atCoder(input));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

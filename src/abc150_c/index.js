'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'
function whatNumber(length, array) {
  let sum = 1;
  const factorial = num => {
    if (num < 2) return 1;
    return num * factorial(num - 1);
  };
  for (let i = 0; i < length; i++) {
    if (array[i] > i + 1) {
      sum = sum + (array[i] - i - 1) * factorial(length - i - 1);
    }
  }
  return sum;
}

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs0 = input.split('\n')[0].split(' ');
  const inputs1 = input.split('\n')[1].split(' ');
  const inputs2 = input.split('\n')[2].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const numberLength = parseInt(inputs0[0], 10);
  //出力
  const inputs1Number = whatNumber(numberLength, inputs1);
  const inputs2Number = whatNumber(numberLength, inputs2);
  console.log(inputs1Number, inputs2Number);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

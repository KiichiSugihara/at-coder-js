'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

function palindrome(text) {
  let counter = 0;
  for (let i = 0; i < text.length / 2; i++) {
    if (text.charAt(i) !== text.charAt(text.length - i - 1)) {
      counter++;
    }
  }
  return counter;
}
// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs = input.split('\n')[0].split(' ');
  //出力
  console.log(palindrome(inputs[0]));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

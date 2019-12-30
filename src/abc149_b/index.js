'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

function cookieCheck(cookieA, cookieB, actionK) {
  const cookieSum = cookieA + cookieB;
  if (cookieSum <= actionK) {
    console.log(0, 0);
  } else if (cookieA <= actionK && actionK < cookieSum) {
    console.log(0, cookieSum - actionK);
  } else {
    console.log(cookieA - actionK, cookieB);
  }
}

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs = input.split('\n')[0].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const cookieA = parseInt(inputs[0], 10);
  const cookieB = parseInt(inputs[1], 10);
  const actionK = parseInt(inputs[2], 10);
  cookieCheck(cookieA, cookieB, actionK);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'
function snack(data) {
  var maxOf = data.reduce((max, p) => (p > max ? p : max), 0);
  var incremental = maxOf;
  var found = false;
  do {
    for (var j = 0; j < data.length; j++) {
      if (maxOf % data[j] !== 0) {
        maxOf += incremental;
        break;
      } else {
        if (j === data.length - 1) {
          found = true;
          break;
        }
      }
    }
  } while (!found);
  return maxOf;
}

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs = input.split('\n')[0].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const a = parseInt(inputs[0], 10);
  const b = parseInt(inputs[1], 10);
  //出力
  const array = [a, b];
  console.log(snack(array));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

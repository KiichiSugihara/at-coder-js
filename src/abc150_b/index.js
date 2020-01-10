'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs1 = input.split('\n')[1].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const texts = String(inputs1[0]);
  //出力
  const count = (texts.match(/ABC/g) || []).length;
  console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

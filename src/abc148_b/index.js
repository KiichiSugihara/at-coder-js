'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

function sameLength(textS, textT) {
  let texts = '';
  for (let i = 0; i < textS.length; i++) {
    texts = texts + textS[i] + textT[i];
  }

  console.log(texts);
}

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  // const inputs0 = input.split('\n')[0].split(' ');
  const inputs1 = input.split('\n')[1].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  // const lengthN = parseInt(inputs0[0], 10);
  const textS = inputs1[0];
  const textT = inputs1[1];
  //出力
  sameLength(textS, textT);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

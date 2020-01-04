'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

function crashBrocks(length, blocks) {
  let sortedBlocks = blocks;
  sortedBlocks.sort(function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let blockFinal = 0;
  for (let i = 0; i < length; i++) {
    if (Number(sortedBlocks[i]) === blockFinal + 1) {
      blockFinal = i + 1;
    } else if (Number(sortedBlocks[i]) === blockFinal) {
      continue;
    } else {
      break;
    }
  }
  // 処理: 元々の順番で思考
  console.log(blocks, sortedBlocks, blockFinal);
  // return length, blocks;
}
// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const length = input.split('\n')[0].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const blocks = input.split('\n')[1].split(' ');
  //出力
  // console.log(crashBrocks(length, blocks));
  crashBrocks(length, blocks);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

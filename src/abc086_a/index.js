import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

// inputに入力データ全体が入る
function main(input) {
  const args = input.split(' ');
  const a = parseInt(args[0], 10);
  const b = parseInt(args[1], 10);

  if ((a * b) % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

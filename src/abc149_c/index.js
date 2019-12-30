'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

function primeCheck(num) {
  //2 は素数なので true を返す
  if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      //2以上の数で割ったとき余りが0になれば false を返す。つまり素数ではない。
      if (num % i === 0) {
        return false;
        break;
      }

      //ループが最後まで行く、つまり割れる数がなかったら true を返す。つまり素数。
      if (i + 1 === num) {
        return true;
      }
    }
  }
}
function nextPrime(startNumber) {
  let nextNumber = 0;
  let counter = startNumber;
  for (counter; counter < 1000000; counter++) {
    if (primeCheck(counter)) {
      nextNumber = counter;
      break;
    }
  }
  return nextNumber;
}

// inputに入力データ全体が入る
function main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs = input.split('\n')[0].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const a1 = parseInt(inputs[0], 10);
  console.log(nextPrime(a1));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

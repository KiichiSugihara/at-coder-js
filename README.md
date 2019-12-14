# at-coder-js

use JS for AtCoder

# setup

PROBLEM_URL='https://atcoder.jp/contests/agc001/tasks/agc001_a' PROBLEM_NAME='agc001_a' npm run setup

# compile

PROBLEM_URL='https://atcoder.jp/contests/agc001/tasks/agc001_a' PROBLEM_NAME='agc001_a' npm run build
npm run build

# test

oj d PROBLEM_URL
oj t -c "node compile.js"

# submit

oj s PROBLEM_URL compile.js

oj s compile.js

### Reference

https://online-judge-tools.readthedocs.io/en/master/introduction.ja.html

const shell = require('shelljs');
const config = require('./config');
const problemURL = config.PROBLEM_URL;
const problemName = config.PROBLEM_NAME;
const exec = require('child_process').exec;

if (!problemURL || !problemName) {
  return 'Set URL & Name';
}

const projectURL = './src/' + String(problemName) + '/';

// PDirへ移動
shell.cd(projectURL);

const exexCommand = 'oj t -c' + '"node compile.js"';
exec(exexCommand, (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }
  console.log(stdout);
});

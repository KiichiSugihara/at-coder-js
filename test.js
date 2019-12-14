const shell = require('shelljs');
const problemURL = process.env.PROBLEM_URL;
const problemName = process.env.PROBLEM_NAME;
const exec = require('child_process').exec;

if (!problemURL || !problemName) {
  return 'Set URL & Name';
}

console.log(problemURL, problemName);
// make projectDir
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

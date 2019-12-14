const shell = require('shelljs');
const problemURL = process.env.PROBLEM_URL;
const problemName = process.env.PROBLEM_NAME;

if (!problemURL || !problemName) {
  return 'Set URL & Name';
}

console.log(problemURL, problemName);
// make projectDir
const projectURL = './src/' + String(problemName) + '/';
shell.mkdir('-p', projectURL);
// Copy file
const fileURL = projectURL + 'index.js';
shell.cp('-R', './templates/index.js', fileURL);

shell.cd('..');

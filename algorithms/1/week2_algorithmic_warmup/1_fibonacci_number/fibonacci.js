// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  console.log(fib(parseInt(line, 10)));
  process.exit();
}

function fib(n) {
  const num = [0, 1];

  for (let i = 2; i <= n; i++) {
    num[i] = num[i - 1] + num[i - 2];
  }

  return num[n];
}

module.exports = fib;

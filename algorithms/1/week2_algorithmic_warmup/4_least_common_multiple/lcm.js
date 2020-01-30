// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  if (line !== '\n') {
    const a = parseInt(line.toString().split(' ')[0], 10);
    const b = parseInt(line.toString().split(' ')[1], 10);

    console.log(lcm(a, b));
    process.exit();
  }
}

function lcm(a, b) {
  // 8 6 = 24

  if (a === 0 || b === 0) {
    return 0;
  }

  if (a < b) {
    a = a ^ b;
    b = b ^ a;
    a = a ^ b;
  }

  let i = 2;
  let multiple = a;

  while (multiple % b > 0) {
    multiple = a * i;
    i++;
  }

  return multiple;
}

module.exports = lcm;

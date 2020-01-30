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

    console.log(gcd(a, b));
    process.exit();
  }
}

function gcd(a, b) {
  let num1, num2;

  if (a > b) {
    num1 = a;
    num2 = b;
  } else {
    num1 = b;
    num2 = a;
  }

  let mod = num1 % num2;

  if (mod > 0) {
    num2 = gcd(num2, mod);
  }

  return num2;
}

module.exports = gcd;

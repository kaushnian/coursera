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
    const n = parseInt(line.toString().split(' ')[0], 10);
    const m = parseInt(line.toString().split(' ')[1], 10);

    console.log(getFibMod(n, m));
    process.exit();
  }
}

// Fi mod m = ?

// 2015 mod 8(length) = 7, 7 mod 3 = 1;

function getFibMod(i, m) {
  if (i === 0) return 0;
  if (i === 1) return 1;

  const fi = [0, 1];
  let period = [0, 1];
  const pattern = '0,1';
  let calcPeriod = true;

  let index = 2;

  while (calcPeriod) {
    fi[index] = fi[index - 1] + fi[index - 2];
    period.push(fi[index] % m);
    index++;
    calcPeriod = period.slice(-2).join() !== pattern;
  }

  period = period.slice(0, -2);

  return fi[i % period.length] % m;
}

module.exports = getFibMod;

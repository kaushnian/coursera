// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
  rl.on('line', readLine);
});

function readLine(line) {
  const arr = line
    .toString()
    .split(' ')
    .map(Number);

  console.log(max(arr));
  process.exit();
}

function max(arr) {
  let maxIndex1 = -1;
  for (let i = 0; i < arr.length; i++) {
    if (maxIndex1 === -1 || arr[i] > arr[maxIndex1]) {
      maxIndex1 = i;
    }
  }

  let maxIndex2 = -1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== maxIndex1 && (maxIndex2 === -1 || arr[i] > arr[maxIndex2])) {
      maxIndex2 = i;
    }
  }

  return arr[maxIndex1] * arr[maxIndex2];
}

module.exports = max;

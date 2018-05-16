const express = require('express');

const app = express();

function Fibonacci(position) {
  // Generates numbers of Fibonacci sequence and returns last four values,
  // starting on the specified position
  const Fib = [];

  Fib[0] = 1;
  Fib[1] = 1;

  for (let i = 2; i <= position + 2; i += 1) {
    // Next fibonacci number = previous + one before previous
    Fib[i] = Fib[i - 2] + Fib[i - 1];
  }

  return Fib.slice(position - 1);
}

function Primes(max) {
  // Generates all prime numbers lower or equal to specified maximum

  let x = 3;
  const Pri = [2];

  while (x <= max) {
    let isPrime = true;

    for (let i = 0; i <= Pri.length - 1; i += 1) {
      if (Pri[i] > Math.sqrt(x)) { break; }
      if (x % Pri[i] === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) { Pri.push(x); }

    x += 1;
  }

  return Pri;
}

function Deconstruct(x, primes, end) {
  let result = 0;
  let max = 0;

  if (x === 0) { return 1; }
  if (x === 1) { return 0; }

  for (let i = 0; i <= end - 1; i += 1) {
    if (x >= primes[i]) {
      max = i;
    } else { break; }
  }

  for (let i = 0; i <= max; i += 1) {
    result += Deconstruct(x - primes[i], primes, i + 1) * primes[i];
  }

  return result;
}

app.get('/sum/:n', (req, res) => {
  const n = parseInt(req.params.n, 10);

  const Fib = Fibonacci(n);

  const Pri = Primes(Fib[3]);

  const Multiples = [];

  for (let i = 0; i <= 3; i += 1) {
    Multiples[i] = Deconstruct(Fib[i], Pri, Pri.length);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ input: n, result: Multiples }));
});


app.listen(3000, () => {
  console.log('Hello there!');
});

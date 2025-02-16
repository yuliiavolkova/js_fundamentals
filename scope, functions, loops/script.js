// 1

function isEven(n) {
  if (n % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isEven(4); // true
isEven(7); // false
isEven(10); // true

// 2

function checkNumber(n) {
  if (n > 0) {
    console.log("Positive");
  } else if (n === 0) {
    console.log("Zero");
  } else if (n < 0) {
    console.log("Negative");
  }
}

checkNumber(5); // "Positive"
checkNumber(-3); // "Negative"
checkNumber(0); // "Zero"

// 3

function isDivisibleByThree(n) {
  if (n % 3 === 0) {
    console.log("Divisible");
  } else {
    console.log("NOT Divisible");
  }
}

isDivisibleByThree(9); // "Divisible"
isDivisibleByThree(10); // "Not Divisible"

// 4

function findMax(a, b, c) {
  console.log(Math.max(a, b, c));
}
findMax(3, 7, 5); // 7
findMax(10, 10, 2); // 10
findMax(-1, -5, -3); // -1

// 5

function fizzBuzz(n) {
  if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(n);
  }
}
fizzBuzz(3); // "Fizz"
fizzBuzz(5); // "Buzz"
fizzBuzz(15); // "FizzBuzz"
fizzBuzz(7); // 7

// 6

function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = i + sum;
  }
  return sum;
}
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(10)); // 55

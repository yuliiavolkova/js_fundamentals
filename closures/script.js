/*1 - counter ()

function counter() {
  let count = 0;
  return function () {
    count++;
    if (count > 3) {
      count = 1;
      console.log("Lets start!");
    }
    return count;
  };
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// 2 - makeAdder(x)

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(10)); //  15
console.log(add5(20)); // 25

const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add10(100)); // 110

// 3 - createMultiplier(x)

function createMultiplier(x) {
  return function (num) {
    return x * num;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10
console.log(double(10)); // 20

const triple = createMultiplier(3);
console.log(triple(5)); // 15
console.log(triple(10)); // 30

*/

// 4 - Private Counter

function privateCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
  };
}

const counter = privateCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.reset()); // 0
console.log(counter.increment()); // 1

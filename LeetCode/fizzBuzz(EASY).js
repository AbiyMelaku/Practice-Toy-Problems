var fizzBuzz = function(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      arr.push('Buzz');
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      arr.push('FizzBuzz');
    } else {
      arr.push(''+i+'');
    }
  }
  return arr;
};
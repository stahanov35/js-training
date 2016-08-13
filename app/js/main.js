(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    for (let i = 1; i <= 100; i++) {
      let remainderDiv3 = i % 3;
      let remainderDiv5 = i % 5;

      if (!remainderDiv3 && !remainderDiv5) {
        console.log('FizzBuZZ');
      }
      if (!remainderDiv3) {
        console.log('Fizz');
        continue;
      }
      if (!remainderDiv5) {
        console.log('Buzz');
        continue;
      }
      console.log(i);
    }
  }
};
}());

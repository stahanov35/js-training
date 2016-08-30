(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    console.log('Summ = ', sum(range(1,10,2)));

    // Summ of array elements
    function sum(arr) {
      let sum = 0;

      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }

      return sum;
    }

    // Range (extended via step argument)
    function range(a, b, step = 1) {
      let arr = [];
      let count = Math.abs(b - a) + 1;
      let absStep = Math.abs(step);

      for (; count; count -= absStep) {
        arr.push(a);
        a += step;
      }

      console.log(arr);
      return arr;
    }
  }
};
}());
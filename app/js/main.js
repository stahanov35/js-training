(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    range(1,10);

    function range(a, b) {
      let arr = [];
      let count = Math.abs(b - a) + 1;

      for (; count; count--) {
        arr.push(a++);
      }

      console.log(arr);
      return arr;
    }
  }
};
}());
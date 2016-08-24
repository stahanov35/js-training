(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let toValue = 7;
    let count = Math.ceil(toValue / 8);
    console.log(count);
    let i = toValue % 8;
    let j = 1;
    console.log(i);
    do {
      switch (i) {
        case 1:
          i++;
          console.log(i + j);
        case 2:
          i++;
          console.log(i + j);
        case 3:
          i++;
          console.log(i + j);
        case 4:
          i++;
          console.log(i + j);
        case 5:
          i++;
          console.log(i + j);
        case 6:
          i++;
          console.log(i + j);
        case 7:
          i++;
          console.log(i + j);
        case 8:
          i++;
          console.log(i + j);
        default: i = 1;
      }
      j++;
    } while (j <= count + 1);
  }
};
}());

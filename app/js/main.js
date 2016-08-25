(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let toValue = 17;
    let count = Math.floor(toValue / 8);
    let i = toValue % 8;
    let j = 1;
    do {
      switch (i) {
        case 8:
          i++;
          print(j++);
        case 7:
          i++;
          print(j++);
        case 6:
          i++;
          print(j++);
        case 5:
          i++;
          print(j++);
        case 4:
          i++;
          print(j++);
        case 3:
          i++;
          print(j++);
        case 3:
          i++;
          print(j++);
        case 1:
          i++;
          print(j++);
        default: i = 8;
      }
    } while (count--);
  }

  function print(number) {
    let devRemainder3 = number % 3;
    let devRemainder5 = number % 5;

    if (!devRemainder3 && !devRemainder5) {
      console.log('FizzBuzz');
    } else if (!devRemainder3) {
      console.log('Fizz');
    } else if (!devRemainder5) {
      console.log('Buzz');
    } else{
      console.log(number);
    }
  }
};
}());

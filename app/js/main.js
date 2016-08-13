(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let i = 7;
    let str = '';

    while (i--) {
      str += '#';
      console.log(str);
    }
  }
};
}());

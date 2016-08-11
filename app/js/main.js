(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let i = 0,
      str = '';

    while(i < 7){
      str += '#';
      i++;
      console.log(str);
    }
  }
};
}());
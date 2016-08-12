(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let i = 7,
      str = '';

    while(i--){
      str += '#';
      console.log(str);
    }
  }
};
}());
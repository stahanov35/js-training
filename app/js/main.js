(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let boardSize = 8;
    let boardRowFirst = '';
    let boardRowSecond = '';
    let result = '';

    // Create templates for rows
    for (let i = boardSize; i; i -= 2) {
      boardRowFirst += ' #';
      boardRowSecond += '# ';
    }

    // Generate final result
    for (; boardSize; boardSize--) {
      result += boardSize%2 ? `${boardRowFirst}\n` : `${boardRowSecond}\n`;
    }

    console.log(result);
  }
};
}());
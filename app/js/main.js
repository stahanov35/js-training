(function() {
'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let boardSize = +prompt('Please enter board Size');
    let boardRowFirst = '';
    let boardRowSecond = '';
    let result = '';

    // Validation of board size value
    if (!boardSize) {
      return console.log('Enter correct intenger number!');
    }

    // Create templates for rows
    for (let i = boardSize; i > 0; i -= 2) {
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
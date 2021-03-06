var prompt = require('prompt');
// display board

var char = '*';
var playerAChar = 'X';
var playerBChar = 'O';

var rows = [[char, char, char],[char, char, char],[char, char, char]];
var showBoard = function() {
  var row = '';
  rows.forEach(function(row) {
    console.log(row.join(' '));
  });
};

// initial state
showBoard();

var getChoices = function() {
    prompt.get(['playerAchoice', 'playerBchoice'], function (err, result) {
        /*
        Player 1
        */

        
        console.log('Player 1 (' + playerAChar +'), your turn: ' + result.playerAchoice);
        var square = result.playerAchoice.split(' '); // get col and row as string input separated by a space
        col = Number(square[0]);
        row = Number(square[1]);
        rows[row][col] = playerAChar; // place piece
        showBoard();

        console.log('Player 2 (' + playerBChar +'), your turn: ' + result.playerBchoice);
        square = result.playerBchoice.split(' '); // get col and row as string input separated by a space
        col = Number(square[0]);
        row = Number(square[1]);
        rows[row][col] = playerBChar; // place piece
        showBoard();

        var winner = determineWin();
        if (!winner) {
          getChoices();
        } else {
          console.log('Winner!');
        }
    });
};

var determineWin = function() {
  // if same char in same row then win
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var colWin = rows[0][i] === rows[1][i] && rows[0][i] === rows[2][i] && rows[0][i] !== char;
    var lDiagWin = rows[0][0] === rows[1][1] && rows[0][0] === rows[2][2] && rows[0][0] !== char;
    var rDiagWin = rows[0][2] === rows[1][1] && rows[0][2] === rows[2][0] && rows[0][2] !== char;

    // rows
    if (row[0] === row[1] && row[1] === row[2] && row[0] !== char) {
      return true;
    } 
    // columns or diagonals
    if (colWin || lDiagWin || rDiagWin) {
      return true;
    }
  }
  return false;
};

var validatePlacement = function() {

};

getChoices();

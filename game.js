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

prompt.start();

prompt.get(['playerAchoice'], function (err, result) {
    showBoard();


    /*
    Player 1
    */
    console.log('Choose a column and row separated by a space and starting at 0 for the first column:');
    console.log('Player 1 (' + playerAChar +'), your turn: ' + result.playerchoice);


    // show board
    var square = result.playerAchoice.split(' ');
    col = Number(square[0]);
    row = Number(square[1]);

    console.log('col: ' + square[0]);
    rows[col][row] = playerAChar;
    showBoard();



});




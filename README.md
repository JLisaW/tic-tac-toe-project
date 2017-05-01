Read Me for Tic Tac Toe Game

Lisa Wang - April 30, 2017

WDI-017

URL for Game
https://jlisaw.github.io/tic-tac-toe-project/

Wire Frame
http://imgur.com/a/qizNl

I did not have a chance to style my game the way I had envisioned it.
Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* JSON
* CURL for testing of API GET, PATCH, and POST requests
* Grunt for test environment
* Atom
* GitHub
* Chrome for browser testing
Planning, Development, and Problem Solving

My strategy for this project was to complete tasks according to the suggested schedule.  I started with the authentication section.

I created my game board as an array of 9 empty strings. The game board was created as a table in HTML.  The squares are a class and each square has an id.

Since my game board is an array of 9 empty strings my game logic is set so that when three squares in a row are the same and not empty it log it as a win.

There is a “togglePlayer” function that alternates the ‘x’ and ‘o’ players.  Once a player wins or there is a draw, the game board disappears.

I used console.logs for debugging.

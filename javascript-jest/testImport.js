const {getScore4, Game, Player} = require('./tennis4');

const myPlayer1 = new Player('1',0);
const myPlayer2 = new Player('2',0);
const myGame = new Game([myPlayer1, myPlayer2]);

function getValue(){
if (myGame.isDraw()) return myGame.getScoreDraw();
if (myGame.isWon()) return myGame.getScoreWin();
if (myGame.isAdvantage()) return myGame.getScoreAdvantage();
return myGame.getTempScore();}

const output  = getValue();
console.log(output);
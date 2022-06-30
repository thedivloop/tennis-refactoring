'use strict';

const CONFIG = (() => {
  const SCORE_TEXT = ["Love","Fifteen","Thirty","Forty"];
  return {
    SCORE_TEXT,
    SCORE_LIMIT : SCORE_TEXT.length-1,
    DIFFERENCE_ADVANTAGE : 1,
    DEUCE_TEXT: "Deuce",
    DRAW_TEXT_SUFFIX : "-All",
    WIN_TEXT_PREFIX : "Win for player",
    ADVANTAGE_TEXT_PREFIX : "Advantage player",
    SCORE_TEXT_SEPARATOR : "-",
    INITIAL_SCORE : 0
  }
})();

class Game {
  constructor(playersList) {
    this.playersList = playersList;
    this.score = CONFIG.INITIAL_SCORE;
  }

  static get scoreText() {
    return CONFIG.SCORE_TEXT;
  }

  static get drawTextSuffix() {
    return CONFIG.DRAW_TEXT_SUFFIX;
  }

  static get winTextPrefix() {
    return CONFIG.WIN_TEXT_PREFIX;
  }

  static get advantageTextPrefix() {
    return CONFIG.ADVANTAGE_TEXT_PREFIX;
  }

  static get scoreTextSeparator() {
    return CONFIG.SCORE_TEXT_SEPARATOR;
  }

  static get deuceText() {
    return CONFIG.DEUCE_TEXT;
  }

  static get scoreLimit() {
    return CONFIG.SCORE_LIMIT;
  }

  static get differenceAdvantage() {
    return CONFIG.DIFFERENCE_ADVANTAGE;
  }

  isDraw() {
    return this.playersList[0].score == this.playersList[1].score;
  }
  isWon() {
    return Math.abs(this.playersList[0].score - this.playersList[1].score) > Game.differenceAdvantage && (this.playersList[0].score > Game.scoreLimit || this.playersList[1].score > Game.scoreLimit);
  }
  isAdvantage() {
    return Math.abs(this.playersList[0].score - this.playersList[1].score) ==  Game.differenceAdvantage && (this.playersList[0].score > Game.scoreLimit || this.playersList[1].score > Game.scoreLimit);
  }

  getScoreDraw() {
    if (this.playersList[0].score < Game.scoreLimit) {
      return Game.scoreText[this.playersList[0].score]+Game.drawTextSuffix;
    }
    return Game.deuceText;
  }
  getScoreWin() {
    return Game.winTextPrefix + this.playersList[1*(this.playersList[0].score < this.playersList[1].score)].name;
  }
  getScoreAdvantage() {
    return Game.advantageTextPrefix + this.playersList[1*(this.playersList[0].score < this.playersList[1].score)].name;

  }
  getTempScore() {
    return Game.scoreText[this.playersList[0].score] + Game.scoreTextSeparator + Game.scoreText[this.playersList[1].score];
  }
}

class Player {
  constructor(name,score) {
    this.name = name;
    this.score = score;
  }
}

function getScore4(player1points, player2points) {

  const myGame = new Game([new Player('1',player1points), new Player('2',player2points)]);
  if (myGame.isDraw()) return myGame.getScoreDraw();
  if (myGame.isWon()) return myGame.getScoreWin();
  if (myGame.isAdvantage()) return myGame.getScoreAdvantage();
  return myGame.getTempScore();
}

module.exports = {getScore4, Game, Player};
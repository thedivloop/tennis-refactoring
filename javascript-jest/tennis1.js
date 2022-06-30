'use strict';

function getScore1(m_score1, m_score2) {
  const scoreDraw = ["Love-All","Fifteen-All","Thirty-All","Deuce"];
  var score = "";
  var tempScore = 0;
  if (m_score1 === m_score2) { 
    score = scoreDraw[Math.min(m_score1,3)];
  } else if (m_score1 >= 4 || m_score2 >= 4) {
    var differenceResult = Math.abs(m_score1 - m_score2);
    score =  differenceResult == 1 ? "Advantage player" + (m_score1 > m_score2 ? "1" : "2") : "Win for player" + (m_score1 > m_score2 ? "1" : "2");
  } else {
      const tempScoreList = ["Love","Fifteen","Thirty","Forty"];
    score = tempScoreList[m_score1] + "-" + tempScoreList[m_score2];
  }
  return score;
}

module.exports = getScore1;

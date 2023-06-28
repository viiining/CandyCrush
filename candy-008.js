// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  let maxScore = 0;
  let highestScoreWord = "";
  let wordsArray = input.split(" ");
  wordsArray.forEach((word) => {
    const eachCharacter = word.split("");
    const eachWordScore = eachCharacter.reduce(
      (accScore, char) => accScore + char.charCodeAt(0) - 96,
      0
    );
    if (eachWordScore > maxScore) {
      maxScore = eachWordScore;
      highestScoreWord = word;
    }
  });
  return highestScoreWord;
}
console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

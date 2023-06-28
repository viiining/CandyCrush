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

// 編號：CANDY-008 -- simplify
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  let maxScore = 0;
  let highestScoreWord = "";
  input.split(" ").forEach((word) => {
    const eachWordScore = word
      .split("")
      .reduce((accScore, char) => accScore + char.charCodeAt(0) - 96, 0);
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

// solving steps:
//    自行設定一個初始值 maxScore = 0, highestScoreWord = "" 之後可以用判斷再重新指派。
//    我要針對各個單字做每個字母的分數加總，因此:
// -> 先把傳進來的 input 用 split(" ")的方式得到一個陣列並且包含每個單字
// -> 對單字用 forEach() 搭配 split("") 去抓到每個字母
// -> 用 reduce() 做累加運算，其中我將各個字母用 charCodeAt() 轉成編碼 - 96 以符合題目說的（字母 a 得 1 分、b 得 2 分...）
// -> 最後判斷如果每個單字的加總分數大於最高分，則最高分就指派為它，而最高分的單字也指派給那個單字。

// 編號：CANDY-008 -- revision
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  let wordList = input.split(" ");
  let eachWordScoreList = wordList.map((word) => {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word[i].charCodeAt(0) - 96;
    }
    return score;
  });
  const highestScoreIndex = eachWordScoreList.indexOf(
    Math.max(...eachWordScoreList)
  );
  return wordList.at(highestScoreIndex);
}
console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

// solving steps:
//    我要針對各個單字做每個字母的分數加總，因此:
// -> eachWordList = 把傳進來的 input 用 split(" ")的方式得到一個陣列並且包含每個單字
// -> eachWordScoreList = 對單字用 map() 去抓每個字母做運算，其中將各個字母用 charCodeAt() 轉成編碼 - 96
// -> 最後改以尋找 eachWordScoreList 的最大值，並找出最大值的索引值，代回去 eachWordList 中，找單字回傳。

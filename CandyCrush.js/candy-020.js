// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const xCount = [...str].filter(
    (element) => element.toLowerCase() === "x"
  ).length;
  const oCount = [...str].filter(
    (element) => element.toLowerCase() === "o"
  ).length;
  return xCount === oCount;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true

// solving steps:
// 以陣列展開 str 以回傳的長度去判斷有幾個 x 跟 o，最後比較兩者是否一致。

// 編號：CANDY-020 -- revision
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const xCount = str.match(/x/gi)?.length;
  const oCount = str.match(/o/gi)?.length;
  return xCount === oCount;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true

// solving steps:
// 以 match()方法搭配正規表示法去判斷，並加上optional chaining(?.)去擋掉可能會報錯的 undefined or null，讓 code 繼續判斷數量是否一致 。

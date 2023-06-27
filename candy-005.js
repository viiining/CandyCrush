// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  let result = "";
  for (let i = 0; i < String(num).length; i++) {
    result += String(parseInt(String(num)[i]) ** 2);
  }
  return result;
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

// solving steps:
// 先建立一個空字串，並將數字轉為字串之後，以 for 迴圈抓取每個字做轉換數字，接著平方，最後加進一開始建立的空字串中，輸出答案。

// 編號：CANDY-005 -- revision
function squareDigits(num) {
  return String(num)
    .split("")
    .map((digit) => parseInt(digit) ** 2)
    .join("");
}
console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

// solving steps:
// 先將數字轉為字串型態，並以split(“”)方法達成用“”分開每個字串並成為一個陣列，接著用map()對每個元素轉成整數之後做平方，最後再以join("")可以讓array轉為字串，輸出答案。

// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  // 實作寫在這裡
  for (i = 0; i < chars.length; i++) {
    const element = chars[i].charCodeAt();
    const nextElement = chars[i + 1].charCodeAt();
    if (element + 1 != nextElement) {
      return String.fromCharCode(element + 1);
    }
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P
// solving steps:
// 問題是要找出遺失的char -> 我用 charCodeAt() 印出每個 char 的編碼（數值）， 並用 for 迴圈針對陣列裡的每個 char 數值做比較，只要前一個元素 + 1 不等於下一個元素的話，就可以找出缺少的元素，且用 String.fromCharCode() 回傳遺失的 char。

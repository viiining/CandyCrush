// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  if (num < 10) {
    return num;
  }
  const multiplesOfTen = Math.pow(10, String(num).length - 1);
  const firstDigit = Math.floor(num / multiplesOfTen);
  const remainingDigits = expandedForm(num - multiplesOfTen * firstDigit);

  if (remainingDigits === 0) {
    return `${multiplesOfTen} x ${firstDigit}`;
  }

  return `${multiplesOfTen} x ${firstDigit} + ${remainingDigits}`;
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

// solving steps:
// 先判斷如果 num < 10 回傳 num （最小單位）
// multiplesOfTen 運用 Math.pow 計算10的次方值；firstDigit 算出每個數字的首位
// remainingDigits 則是 num 扣除 multiplesOfTen * firstDigit 用遞迴的方式去跑剩下的位數
// 如果 remainingDigits 是 0，代表沒有非 0 的數字需要處理，則直接回傳 `${multiplesOfTen} x ${firstDigit}` 格式
// 其餘則回傳 `${multiplesOfTen} x ${firstDigit} + ${remainingDigits}` 格式

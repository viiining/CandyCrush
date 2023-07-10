// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
  if (num < 10) {
    return num;
  }
  const sum = String(num)
    .split("")
    .reduce((acc, cv) => acc + Number(cv), 0);

  return numberReducer(sum);
};

console.log(numberReducer(9527)); // 印出 5
console.log(numberReducer(1450)); // 印出 1
console.log(numberReducer(5566108)); // 印出 4
console.log(numberReducer(1234567890)); // 印出 9

// solving steps:
// 先設定最小範圍，小於 10 的數字直接回傳；其餘以 reduce() 方法累積總和。最後 return  numberReducer(sum) 就是以遞迴的方式去判斷直到累積加總為小於 10 的數字而停止。

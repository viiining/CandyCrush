// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  return num
    .toString(2)
    .split("")
    .reduce((acc, cv) => acc + parseInt(cv, 10), 0);
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8

// solving steps:
// 先將 num 轉為二進位，以 split("") 轉為陣列之後，以 reduce() 累加的方式去計算有幾個 1 （因為二進位制只有 0 跟 1 可以用累加直接計算）＊＊其中要注意為 cv 需轉回 10 進位制累加＊＊

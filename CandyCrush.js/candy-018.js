// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(...args) {
  if (args[1] === undefined) {
    return Math.floor(Math.random() * args[0]);
  }
  return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
// solving steps:
// 用 Math.random() 方法可以隨機亂數回傳想要的數字區間。
// 因為代入的參數有一個或兩個，可以先判斷如果 arg[1] 是 undefined (意即只有一個參數代入)，則直接以 Math.floor 無條件捨去取整數。
// 若是有兩個參數，讓值回傳區間在 第一個參數 ～（第二個參數-1）

// 編號：CANDY-018 --- revision
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(...args) {
  return args.length === 1
    ? Math.floor(Math.random() * args[0])
    : Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
// solving steps:
// 以 args 的長度去判斷，如果長度是 1 ，則回傳一個介於 0（包含）和 args[0]（不包含）之間的隨機整數；
// 其餘則回傳 args[0]（包含）和 args[1]（不包含）之間的隨機整數

// 編號：CANDY-018 --- revision01
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(min = 0, max = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
// solving steps:
// 給定兩個參數預設值都為 0，這樣可以避開如果只有一個參數傳進來時的報錯，回傳 min（包含）和 max（不包含）之間的隨機整數。
// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   let nonZero = [];
//   let zero = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       nonZero.push(arr[i]);
//     } else {
//       zero.push(arr[i]);
//     }
//   }
//   return nonZero.concat(zero);
// }
// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// solving steps:
// 先宣告兩種新的空陣列，以 for 迴圈判斷不是 0 或者是 0，分別放入一個放"不是" 0 的，一個放"是" 0 的陣列中，為了將兩個陣列合在一起，我使用 concat() 方法做合併。

// 編號：CANDY-003 -- revision
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  let nonZero = arr.filter((element) => element !== 0);
  let zero = arr.filter((element) => element === 0);
  return nonZero.concat(zero);
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// solving steps:
// 以 .filter() 方法去過濾不是 0 或者是 0 得陣列，為了將兩個陣列合在一起，我使用 concat() 方法做合併。

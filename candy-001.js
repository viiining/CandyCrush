// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//   const new_arr = arr.sort((a, b) => a - b);
//   const sum = new_arr[0] + new_arr[1];
//   return sum;
// }

// the best
function sumOfSmallestValues(arr) {
  const new_arr = arr.sort((a, b) => a - b);
  return new_arr[0] + new_arr[1];
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19

// 先排序後加總：以 .sort() 先比較數字並由最小至最大排列，從中抓取新的 array 的第一個與第二個元素加總。

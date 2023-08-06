// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// // Method 1
// function findOdd(A) {
//   // 建立一個物件來記錄每個元素出現的次數
//   const occurrences = {};

//   // 遍歷陣列 A，將元素出現次數記錄在 occurrences 物件中
//   for (let i = 0; i < A.length; i++) {
//     const num = A[i];
//     occurrences[num] = (occurrences[num] || 0) + 1;
//   }

//   // 遍歷 occurrences 物件，找到值為奇數的元素
//   for (const key in occurrences) {
//     if (occurrences[key] % 2 === 1) {
//       return parseInt(key); // 將 key 轉換成數字並返回
//     }
//   }
// }

// Method 2
function findOdd(A) {
  return A.find((el, index) => A.filter((digit) => digit == el).length % 2)
}

console.log(findOdd([7])); // Output: 7
console.log(findOdd([0])); // Output: 0
console.log(findOdd([1, 1, 2])); // Output: 2
console.log(findOdd([0, 1, 0, 1, 0])); // Output: 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output: 4

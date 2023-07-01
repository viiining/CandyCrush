// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
  let oddTimesOfNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    oddTimesOfNumber ^= numbers[i];
  }
  return oddTimesOfNumber;
}

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5

// solving steps:
// 以 XOR 位元運算子去判斷，XOR 運算的特性是相同為 0，不同為 1。如果同一個數字出現偶數次，則會被抵銷為 0，而奇數次則會保留下來。
// 這種方式只能適用於，只有一個數出現奇數次的情況下。

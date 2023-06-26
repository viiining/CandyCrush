// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  let iAmDifferent = numbers.filter(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
  );
  return Number(iAmDifferent);
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// solving steps:
// 因為題目中跟其它元素不一樣的值只有出現一次，所以我用 filter() 篩選出符合 “從頭開始找第一個相符元素的索引值” 要等於 “從尾巴開始找最後一個相符元素的索引值”，用來確定該元素只出現一次的情形，接著再由轉換型別成 Number 輸出結果。

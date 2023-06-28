// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  let oddElements = numbers.filter((el) => el % 2 == 1);
  let evenElements = numbers.filter((el) => el % 2 == 0);
  return Number(oddElements.length > 1 ? evenElements : oddElements);
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// solving steps:
// 宣告兩個變數各自存有奇數與偶數元素的陣列，並以陣列長度判斷，如果奇數陣列的長度有超過一個，表示這陣列大部分是奇數，那我就要印出不是奇數的那個數值，反之亦然。

// CANDY-007 --- revision 針對誤用 Number() 做修正！
function findSomeDifferent(numbers) {
  let oddElements = numbers.filter((el) => el % 2 == 1);
  let evenElements = numbers.filter((el) => el % 2 == 0);
  let parseResult = oddElements.length > 1 ? evenElements : oddElements;
  return parseResult[0];
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// 編號：CANDY-007 --- revision01（不要取多餘的代名詞）
function findSomeDifferent(numbers) {
  let oddElements = numbers.filter((el) => el % 2 == 1);
  let evenElements = numbers.filter((el) => el % 2 == 0);
  return (oddElements.length > 1 ? evenElements : oddElements)[0];
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// Method 01 (Using Object to count)
function findOutlier(integers) {
  let scoreBoard = { odd: [], even: [] };
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 !== 0) {
      scoreBoard.odd.push(integers[i]);
    } else {
      scoreBoard.even.push(integers[i]);
    }
  }
  return scoreBoard.odd.length > scoreBoard.even.length
    ? scoreBoard.even[0]
    : scoreBoard.odd[0];
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([-58497916, 52328355, -173166851, -174437017]));

// Method 02
function findOutlier(int) {
  let even = int.filter((el) => el % 2 == 0);
  let odd = int.filter((el) => el % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([-58497916, 52328355, -173166851, -174437017]));

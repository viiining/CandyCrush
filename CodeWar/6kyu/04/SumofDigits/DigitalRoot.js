// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  // 如果是個位數字就直接回傳
  if (n < 10) {
    return n;
  }
  // 將傳進來的數字轉字串後，轉為陣列再加總
  const initSum = String(n)
    .split("")
    .reduce((acc, cv) => acc + Number(cv), 0);
  return digitalRoot(initSum);
}

console.log(digitalRoot(942));

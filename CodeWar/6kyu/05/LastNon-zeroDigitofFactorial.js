// Your task is to find the last non-zero digit of n! (factorial).

// n! = 1 x 2 x 3 x ... x n

// Example:
// If n=12, your function should return 6 since 12! = 479001600

// Note
// Calculating the whole factorial will timeout.

// This method cause the note of calculating the whole factorial will timeout.

// function lastDigit(n) {
//   if (n === 0) {
//     return 1;
//   }
//   const numList = [];
//   for (let i = 1; i <= n; i++) {
//     numList.push(i);
//   }
//   const multiple = numList.reduce((acc, cv) => acc * cv, 1);
//   const collector = Array.from(String(multiple));
//   const nonZero = collector.filter((el) => el !== "0");
//   return Number(nonZero.pop());
// }

// Javascript program to find
// last non-zero digit in n!

// Initialize values of last non-zero
// digit of numbers from 0 to 9

function lastDigit(n) {
  let dig = [1, 1, 2, 6, 4, 2, 2, 4, 2, 8];
  if (n < 10) return dig[n];

  // Check whether tens (or second last) digit is odd or even
  // If n = 375, So n/10 = 37 and
  // (n/10)%10 = 7 Applying formula
  // for even and odd cases.
  if ((parseInt(n / 10, 10) % 10) % 2 == 0)
    return (6 * lastDigit(parseInt(n / 5, 10)) * dig[n % 10]) % 10;
  else return (4 * lastDigit(parseInt(n / 5, 10)) * dig[n % 10]) % 10;
}

console.log(lastDigit(387)); // Output: 2

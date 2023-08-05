// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// 將傳入的數字與3或5整除之後加總
// // Method 1
function solution(number) {
  const numList = [];
  for (let num = 1; num < number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      numList.push(num);
    }
  }
  return numList.reduce((acc, cv) => acc + cv, 0);
}

// Method 2
function solution(number) {
  let digitSum = 0;
  for (let num = 1; num < number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      digitSum += num;
    }
  }
  return digitSum;
}

console.log(solution(10));

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// 傳進來的字串中，尋找最大與最小，並回傳字串格式。
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  const numberList = numbers.split(" ");
  const max = Math.max(...numberList);
  const min = Math.min(...numberList);
  return `${max} ${min}`;
}

highAndLow("1 2 3 4 5");

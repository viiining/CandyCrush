function expandedForm(num) {
  if (num <= 10) {
    return num;
  }
  const multiplesOfTen = Math.pow(10, String(num).length - 1); // 算出 10 的倍數
  const firstDigits = Math.floor(num / multiplesOfTen); // 算出首數字
  const remainingDigits = expandedForm(num - multiplesOfTen * firstDigits); // 剩餘的數字用遞回再跑一次

  return remainingDigits === 0 // 判斷是否整除
    ? `${firstDigits * multiplesOfTen}`
    : `${firstDigits * multiplesOfTen} + ${remainingDigits}`;
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

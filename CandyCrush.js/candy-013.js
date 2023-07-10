// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  const multiplier = [1, 2, 1, 2, 1, 2, 4, 1];
  const product = vat
    .split("")
    .map((element, index) => element * multiplier[index]);

  if (vat.split("")[6] === "7") {
    return validation(1) % 5 === 0 || validation(0) % 5 === 0;
  } else {
    return validation() % 5 === 0;
  }

  function validation(choice) {
    const sum = product.reduce((acc, element) => {
      if (element === 28) {
        return acc + choice;
      } else if (element >= 10) {
        const digitsSum = String(element)
          .split("")
          .reduce((acc, cv) => acc + Number(cv), 0);
        return acc + digitsSum;
      } else {
        return acc + element;
      }
    }, 0);
    return sum;
  }
}
console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false

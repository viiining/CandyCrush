// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  let hour = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds % 3600) / 60);
  let second = seconds % 60;

  let readableHour = String(hour).padStart(2, "0");
  let readableMinute = String(minute).padStart(2, "0");
  let readableSecond = String(second).padStart(2, "0");

  return `${readableHour}:${readableMinute}:${readableSecond}`;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59

// 先將總秒數轉換成:
// 小時 -> 總秒數除以 3600 並使用 Math.floor() 無條件捨去小數點。
// 分鐘 -> 總秒數除以 3600 後所得到的餘數去除以 60 並使用 Math.floor() 無條件捨去小數點
// 秒數 -> 總秒數除以 60 後所得到的餘數
// 接著將計算出來的值透過 String() 轉為字串，並使用 padStart(2, "0") 格式化: 將值補零至兩位數的格式。

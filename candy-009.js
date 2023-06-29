// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
  return url.includes("#about") ? url.replace("#about", "") : url;
}

console.log(removeAnchor("5xruby.tw")); // 印出 5xruby.tw
console.log(removeAnchor("5xruby.tw/#about")); // 印出 5xruby.tw/
console.log(removeAnchor("5xruby.tw/courses/?page=1#about")); // 印出 5xruby.tw/courses/?page=1

// solving steps:
// 以三元運算子去判斷 url 是否包含 "#about" 字串，是的話用 replace() 方法將空字串取代 "#about"；否則回傳 url 本身。

// 編號：CANDY-009 -- revision
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
  return url.replace(/\#[a-z]*/, "");
}

console.log(removeAnchor("5xruby.tw")); // 印出 5xruby.tw
console.log(removeAnchor("5xruby.tw/#about")); // 印出 5xruby.tw/
console.log(removeAnchor("5xruby.tw/courses/?page=1#about")); // 印出 5xruby.tw/courses/?page=1

// solving steps:
// 以常規表示法，去判斷 url 是否包含 "#與a-z"，是的話用 replace() 方法將空字串取代。
// 先前解題時，以常規表示法試過而失敗（當時沒有持續探究原因）轉而以答案解題 使用 "#about"（如此會造成此方法僅適用此題目 That's not good.）

// 編號：CANDY-009 -- revision01
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
  return url.split("#")[0];
}

console.log(removeAnchor("5xruby.tw")); // 印出 5xruby.tw
console.log(removeAnchor("5xruby.tw/#about")); // 印出 5xruby.tw/
console.log(removeAnchor("5xruby.tw/courses/?page=1#about")); // 印出 5xruby.tw/courses/?page=1

// solving steps:
// 因為 split()可以透過指定的條件去做分割並回傳陣列，所以將 "#" 作為分割條件，抓取索引值為 0，也就是 "#" 前方的元素。
// 此方法透過詢問神奇糖果大師！學到了簡單明瞭的解法！

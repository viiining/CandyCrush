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

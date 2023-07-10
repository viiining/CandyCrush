// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  const converter = str.split("_").map((element, index) => {
    return index === 0 ? element : element[0].toUpperCase() + element.slice(1);
  });
  return converter.join("");
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore

// solving step:
// 先以 split("_") 將各個字由底線分開形成陣列，並使用 map() 在 index 為 0 時，回傳元素本身，其餘則以每個元素的首字轉換大寫，並以加回 element slice(1)，意即，element在index [1] 開始的所有字，最後以 join("") 回傳成字串。

// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
  return a.filter((el)=>!b.includes(el))
}

console.log(arrayDiff([1,2], [1])) // [2]
console.log(arrayDiff([1,2,2], [1])) // [2,2]
console.log(arrayDiff([1,2,2], [2])) // [1]
console.log(arrayDiff([1,2,2], [])) // [1,2,2]
console.log(arrayDiff([], [1,2])) // []
console.log(arrayDiff([1,2,3], [1,2])) // [3]

// solving steps:
// 使用 filter() 方法，比對 a 跟 b 的陣列元素，有一樣的就過濾掉，剩餘的留下。
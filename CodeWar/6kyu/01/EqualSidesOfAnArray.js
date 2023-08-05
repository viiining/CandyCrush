// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// 尋找陣列中的斷點，此斷點的 “左邊和” 等於 “右邊和”，回傳斷點的索引值

function findEvenIndex(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    const leftSum = arr.slice(0, idx).reduce((acc, cv) => acc + cv, 0);
    const rightSum = arr.slice(idx + 1).reduce((acc, cv) => acc + cv, 0);
    if (leftSum === rightSum) {
      return idx;
    }
  }
  return -1;
}
findEvenIndex([20, 10, -80, 10, 10, 15, 35]);

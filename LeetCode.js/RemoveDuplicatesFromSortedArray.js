// Method 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    // 去比對前後的元素是否一樣
    if (nums[i] === nums[i+1]){
      // 一樣就移除當前元素 
      nums.splice(i, 1)
      // 因為 splice 會改變陣列的長度，因此，i 也要跟著動態更新
      i--;
    }
  }
  return nums.length
};

// Method 2
var removeDuplicates = function(nums) {
  // 用於記錄位置
  let position = 0
  for (let i = 1; i < nums.length; i++) {
    // 當有不同元素時，position 就加一，並將不同元素的位置更新到新的位置上
    if (nums[position] !== nums[i]) {
      position++;
      nums[position]=nums[i]
    }
  }
  // 最後要返回 position + 1 是因為陣列的索引從 0 開始，所以 position + 1 為陣列中不同元素的數量。
  return position + 1
};
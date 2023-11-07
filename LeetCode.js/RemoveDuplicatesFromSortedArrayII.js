/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 一開始的兩個元素一定會被記錄
  let position = 2; 
  
  // 從陣列第三個元素開始檢查，如果不同就保留，確保每個元素最多就兩個
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[position - 2]) {
      nums[position] = nums[i];
      position++;
    }
  }
  
  // 表示處理過後的 Array 長度
  return position;
};
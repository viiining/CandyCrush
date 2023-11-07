// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
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
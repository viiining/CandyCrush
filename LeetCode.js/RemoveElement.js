// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// 題目要求要更改原始的 nums 陣列，最終的 k 值要返回陣列中不等於 val 元素的數量。

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Method 1
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      // 找到相同的元素之後要從原始陣列 nums 中移除
      nums.splice(i, 1);
      // 因為有從原始陣列 nums 中移除一個元素，需要將 i 減一，這樣下一次循環才會檢查當前索引的元素。
      i--;
    }
  }
};

let nums = [1, 2, 3, 2, 4];
let val = 2;
removeElement(nums, val);
console.log(nums);

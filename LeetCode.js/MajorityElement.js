// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Method 1:
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let counter = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    // 如果 num 不存在於 counter，就給他初始值 1
    if (!counter[num]) {
      counter[num] = 1
    } else {
      counter[num]++
    }

    // 最後以如果在 counter 裡的數字次數超過陣列長度除以 2 的話，意即為主要出現最多次的元素，則返回該 num
    if (counter[num] > nums.length / 2) {
      return num;
    }
  }
};

// Method 2:
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let score = 0
  let count = 0
  for (i = 0; i < nums.length; i++) {
      if (count == 0) {
          count++;
          score = nums[i]
      } else if (score == nums[i]) {
          count++;
      } else {
          count--;
      }
  }
  return score;
};
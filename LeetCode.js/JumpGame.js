// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


// Method 1:
// (RunTime - 52ms)

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
  // 初始化最大可達距離為 0
  let maxLength = 0; 

  for (let i = 0; i < nums.length; i++) {
    if (i > maxLength) {
      // 如果當前索引 i 超過了最大可達距離 maxLength，
      // 表示無法到達這個索引，直接返回 false
      return false;
    }

    // 更新最大可達距離，取當前最大可達距離和（i + nums[i]）的較大值，確保在每一步中，選擇最大的可達距離。
    maxLength = Math.max(maxLength, i + nums[i]);

    if (maxLength >= nums.length - 1) {
      // 如果目前的最大可達距離已經超過或等於最後一個索引，則可以到達最後一個索引
      return true;
    }
  }

  // 如果結束後都沒有返回 true，表示無法到達最後一個索引，返回 false
  return false;
};


// Method 2:
// (RunTime - 56ms)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 初始化最後一個能夠到達終點的位置為最後一個索引
  let lastPosition = nums.length - 1; 
  
  for (let i = nums.length - 2; i >= 0 ; i--) {
    if (i + nums[i] >= lastPosition) {
      // 如果當前位置 i 能夠到達或超過最後一個能夠到達的位置 lastPosition，
      // 則更新 lastPosition 為當前位置 i
      lastPosition = i;
    }
  }

  // 最終檢查 lastPosition 是否為 0，如果是，表示能夠到達最後一個索引
  return lastPosition === 0;
};

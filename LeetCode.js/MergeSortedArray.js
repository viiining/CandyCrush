/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Method 1
var merge = function(nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
      nums1[i] = nums2[i - m]
  }
  nums1.sort((a, b) => a-b )
};

// Method 2
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
      nums1[m + i] = nums2[i]
  }
  nums1.sort((a, b) => a-b )
};

var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
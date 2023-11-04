# You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

# Merge nums1 and nums2 into a single array sorted in non-decreasing order.

# The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

# 最終的 nums1 陣列中應該包含 m 個 nums1 的元素和 n 個 nums2 的元素（nums1 長度為 m + n），且順序由小到大，可以發現 nums2 的元素數量就等於 nums1 裡面 0 的數量。
# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
  (0...n).each do |i|
    nums1[m + i] = nums2[i]
  end
  nums1.sort!
end

nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3

p merge(nums1, m, nums2, n)
# You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

# Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

# 0 <= j <= nums[i] and
# i + j < n
# Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

# Example 1:

# Input: nums = [2,3,1,1,4]
# Output: 2
# Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

# Example 2:

# Input: nums = [2,3,0,1,4]
# Output: 2

def jump(nums)
  current_position = 0
  max_position = 0
  steps = 0

  # 使用迴圈遍歷 nums 中的元素，只迭代到倒數第二個元素
  (nums.length - 1).times do |i|
    current_position = [current_position, i + nums[i]].max
    if i == max_position
      max_position = current_position
      steps += 1                      
    end
  end

  steps
end

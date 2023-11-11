# Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

# Example 1:

# Input: nums = [1,2,3,4,5,6,7], k = 3
# Output: [5,6,7,1,2,3,4]
# Explanation:
# rotate 1 steps to the right: [7,1,2,3,4,5,6]
# rotate 2 steps to the right: [6,7,1,2,3,4,5]
# rotate 3 steps to the right: [5,6,7,1,2,3,4]

# Example 2:

# Input: nums = [-1,-100,3,99], k = 2
# Output: [3,99,-1,-100]
# Explanation: 
# rotate 1 steps to the right: [99,-1,-100,3]
# rotate 2 steps to the right: [3,99,-1,-100]

# Method 1:
def rotate(nums, k)
  # 建立新的 Array -> new_arr，内容與 nums 相同
  new_arr = nums.dup 

  nums.length.times do |i|
    new_index = (i + k) % nums.length
    nums[new_index] = new_arr[i]
  end
end


# Method 2:
def rotate(nums, k)
  nums.rotate!(-k)
end

# 整個方法的作用是將陣列 nums 向左旋轉 k 步。在 Ruby 中，rotate! 方法會修改原始 Array，而不是傳回一個新的陣列。

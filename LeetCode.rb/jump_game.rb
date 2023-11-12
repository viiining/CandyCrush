# You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

# Return true if you can reach the last index, or false otherwise.

# Example 1:

# Input: nums = [2,3,1,1,4]
# Output: true
# Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


# Example 2:

# Input: nums = [3,2,1,0,4]
# Output: false
# Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


# Method 1:
# (RunTime - 99ms)

def can_jump(nums)
  max_length = 0
  nums.each_with_index do |num, i|
    return false if i > max_length

    max_length = [max_length, i + nums[i]].max

    return true if max_length >= nums.length - 1
  end

  false
end


# Method 2:
# (RunTime - 103ms)

def can_jump(nums)
  last_position = nums.length - 1
  
  # 從倒數第二個數字開始到 0 為止
  (nums.length - 2).downto(0) do |i|
    last_position = i if i + nums[i] >= last_position
  end

  last_position == 0
end

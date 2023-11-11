# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

# Example 1:

# Input: nums = [3,2,3]
# Output: 3

# Example 2:

# Input: nums = [2,2,1,1,1,2,2]
# Output: 2

# Method 1:
def majority_element(nums)
  counter = {}

  nums.each do |num|
    if counter[num].nil?
      counter[num] = 1
    else 
      counter[num] += 1
    end

    if counter[num] > nums.length / 2
      return num
    end
  end
    
end

# Method 2:
def majority_element(nums)
  score = 0
  count = 0

  nums.each do |num|
    if count == 0
      count += 1
      score = num
    elsif score == num
      count +=  1
    else
      count -= 1
    end
  end

  score
end
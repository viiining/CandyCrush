# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# Example 1:

# Input: s = "()"
# Output: true

# Example 2:

# Input: s = "()[]{}"
# Output: true

# Example 3:

# Input: s = "(]"
# Output: false

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.

# solutions
# @param {String} s
# @return {Boolean}
def is_valid(s)
  stack = []
  brackets = {
    ')' => '(',
    ']' => '[',
    '}' => '{'
  }
  
  s.each_char do |char|
    if brackets.values.include?(char)
      stack.push(char)
    elsif brackets.key?(char)
      return false if stack.empty? || stack.pop != brackets[char]
    end
  end

  return stack.empty?
end

puts is_valid("()")        
puts is_valid("()[]{}")
puts is_valid("(]")    
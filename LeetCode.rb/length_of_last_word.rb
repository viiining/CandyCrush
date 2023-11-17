# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal substring consisting of non-space characters only.

# Example 1:

# Input: s = "Hello World"
# Output: 5
# Explanation: The last word is "World" with length 5.


# Example 2:

# Input: s = "   fly me   to   the moon  "
# Output: 4
# Explanation: The last word is "moon" with length 4.


# Example 3:

# Input: s = "luffy is still joyboy"
# Output: 6
# Explanation: The last word is "joyboy" with length 6.

# solution:
def length_of_last_word(s)
  # 用 strip 移除空白格
  trimmed_s = s.strip
  length = 0
  (trimmed_s.length - 1).downto(0).each do |i|
    if trimmed_s[i] == " "
      break
    end
    length += 1
  end
  length
end
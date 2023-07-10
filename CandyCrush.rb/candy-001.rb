# 編號：CANDY-001
# 程式語言：Ruby
# 題目：找出陣列裡最小的兩個值的總和
# 例如：
#   [15, 28, 4, 2, 43] 印出 6
#   [23, 71, 33, 82, 1] 印出 24

# Method 01
list1 = [19, 5, 42, 2, 77]
list2 = [23, 15, 59, 4, 17]

def sumOfSmallestValues(arr)
  arr.min(2)[0] + arr.min(2)[1]
end

puts sumOfSmallestValues(list1) # 印出 7
puts sumOfSmallestValues(list2) # 印出 19

# 用 array.min(個數 = 2 )，來尋找最小的兩個值，並以索引值抓取後加總。

# Method 02
list1 = [19, 5, 42, 2, 77]
list2 = [23, 15, 59, 4, 17]

def sumOfSmallestValues(arr)
  arr.min(2).sum
end

puts sumOfSmallestValues(list1) # 印出 7
puts sumOfSmallestValues(list2) # 印出 19

# 用 array.min(個數 = 2 )，並用 .sum 加總。

# 編號：CANDY-006
# 程式語言：Ruby
# 題目：找出在數字陣列裡跟其它元素不一樣的值

def findDifferent(numbers)
  numbers.find {|element| numbers.count(element) == 1}
end


puts findDifferent([1, 1, 1, 1, 3, 1, 1, 1]); # 印出 3
puts findDifferent([2, 2, 2, 4, 2, 2]); # 印出 4
puts findDifferent([8, 3, 3, 3, 3, 3, 3, 3]); # 印出 8

# solving steps:
# 以 find 方法搭配 count 方法找出只出現一次的數字
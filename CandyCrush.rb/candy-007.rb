# # 編號：CANDY-007
# # 程式語言：Ruby
# # 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

# def findSomeDifferent(numbers)
#   even = numbers.select {|element| element % 2 == 0}
#   odd = numbers.select {|element| element % 2 == 1}
#   even.length > odd.length ? odd : even
# end

# puts findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36]); # 印出 11
# puts findSomeDifferent([160, 3, 1719, 19, 11, 13, -21]); #印出 160

# # solving steps:
# # 用 select 方法篩選出偶數、奇數陣列，再判斷如果偶數陣列長度大於奇數的，則回傳奇數，反之亦然。

# 編號：CANDY-007 -- revision 將回傳型別修正為數字！
# 程式語言：Ruby
# 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

def findSomeDifferent(numbers)
  even = numbers.select {|element| element % 2 == 0}
  odd = numbers.select {|element| element % 2 == 1}
  even.length > odd.length ? odd.first : even.first
end

puts findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36]); # 印出 11
puts findSomeDifferent([160, 3, 1719, 19, 11, 13, -21]); #印出 160

# solving steps:
# 用 select 方法篩選出偶數、奇數陣列，再判斷如果偶數陣列長度大於奇數的，則回傳奇數，反之亦然。
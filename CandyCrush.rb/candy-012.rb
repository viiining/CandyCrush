# 編號：CANDY-012
# 程式語言：Ruby
# 題目：把數字加總，最終濃縮成個位數
# 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
#      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

def numberReducer(num)
    return num if num < 10
    numberReducer(num.to_s.chars.map(&:to_i).sum)
end

puts numberReducer(9527); # 印出 5
puts numberReducer(1450); # 印出 1
puts numberReducer(5566108); # 印出 4
puts numberReducer(1234567890); # 印出 9

# solving steps:
# 先設定最小範圍，小於 10 的數字直接回傳；
# 用遞迴的方式，將 num 轉為字串後用 chars 切割成每個字，用 &:to_i 使字串轉換為整數再做相加。

# 編號：CANDY-005
# 程式語言：JavaScript
# 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

def squareDigits(num)
  num.to_s.split("").map{|digit| digit.to_i ** 2}.join
end

puts squareDigits(3212); # 印出 9414
puts squareDigits(2112); # 印出 4114
puts squareDigits(387);  # 印出 96449

# solving steps
# 將數字轉為字串後，用 split 切分成陣列，並使用 map 針對各個 digit 平方，最後 join 回字串。
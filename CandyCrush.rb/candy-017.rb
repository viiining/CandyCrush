# 編號：CANDY-017
# 程式語言：Ruby
# 題目：計算數字的 2 進位裡有幾個 1
# 範例：5 -> 101 -> 2 個 1


def count_bits(num)
  num.to_s(2).split("").select { |digit| digit == "1" }.length
end


puts count_bits(1234); # 5
puts count_bits(1450); # 6
puts count_bits(9527); # 8

# solving steps:
# 將傳進來的數字用 to_s(2) 轉為二進位，使用 split 方法將每個數字拆分為陣列，
# 將是 "1" 的抓出來成立新陣列，回傳該陣列的長度。 
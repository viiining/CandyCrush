# 編號：CANDY-013
# 程式語言：Ruby
# 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
# https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

def is_valid_vat_number(vat)
  return false if vat.length != 8
  multiplier = [1, 2, 1, 2, 1, 2, 4, 1]
  sum = vat.chars.each_with_index.reduce(0) do |sum, (num, i)|
    sum + (num.to_i * multiplier[i] % 10) + (num.to_i * multiplier[i] / 10)
  end
  return sum % 5 == 0 || (vat[6] == '7' && (sum + 1) % 5 == 0)
end

puts is_valid_vat_number("88117125"); # true
puts is_valid_vat_number("10458575"); # true
puts is_valid_vat_number("53212539"); # true
puts is_valid_vat_number("88117126"); # false

# solving steps:
# 先判斷 vat 長度不是 8 則回傳 false
# 接著定義乘數陣列 multiplier，並將對應位置的乘數後之個位數和十位數相加至 sum 
# 最後判斷被 5 整除, 或是第 7 位數為 7 且 sum + 1 可以被 5 整除
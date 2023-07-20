# 編號：CANDY-010
# 程式語言：Ruby
# 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
# 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

def expandedForm(num)
  return num.to_s if num < 10

  multiples_of_ten = 10**(num.to_s.length - 1)
  first_digit = (num / multiples_of_ten).floor
  remaining_digits = expandedForm(num - multiples_of_ten * first_digit)

  return "#{multiples_of_ten} x #{first_digit}" if remaining_digits == "0"

  "#{multiples_of_ten} x #{first_digit} + #{remaining_digits}"
end

puts expandedForm(8); # 印出 8
puts expandedForm(25); # 印出 10 x 2 + 5
puts expandedForm(148); # 印出 100 x 1 + 10 x 4 + 8
puts expandedForm(1450); # 印出 1000 x 1 + 100 x 4 + 10 x 5
puts expandedForm(60308); # 印出 10000 x 6 + 100 x 3 + 8

# solving steps:
# 判斷是否是個位數，如果是則回傳自己；接著針對每個位數做處理，將 10 的次方倍數與首位數字抓出來，接著再針對剩餘的位數做相同的步驟，直到 remaining_digits 被拆分為個位數為止。如果 remaining_digits 是 0，代表沒有非 0 的數字需要處理，則直接回傳 "#{multiples_of_ten} x #{first_digit}" 。
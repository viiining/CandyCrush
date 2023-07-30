# 編號：CANDY-020
# 程式語言：Ruby
# 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

def xxoo(str)
  str.scan(/x/i).length == str.scan(/o/i).length
end


p xxoo("ooxx"); # true
p xxoo("xxoo"); # true
p xxoo("xxooo"); # false
p xxoo("xoox"); # true
p xxoo("ooAA"); # false
p xxoo("xoXoA"); # true

# solving steps:
# 用 scan 方法尋找符合正規表達式的 'x' 與 'o' 字元且不計大小寫，符合的會返回成一個陣列，並比對陣列的長度是否一致。

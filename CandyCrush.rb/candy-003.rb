# 編號：CANDY-003
# 程式語言：Ruby
# 題目：完成函數的內容，把陣列裡的 0 都移到最後面

list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

def moveZerosToEnd(arr)
  non_zero_list = arr.select {|element| element != 0}
  zero_list = arr.select {|element| element == 0}
  non_zero_list + zero_list
end


p moveZerosToEnd(list); # 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

# solving steps:
# 設定兩個陣列一個放非零的、一個放是零的，最後把兩個陣列相加。
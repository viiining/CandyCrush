# 編號：CANDY-018
# 程式語言：Ruby
# 題目：實作一個可以印出隨機整數的函數

def random_number(min = 0, max = 0)
  min, max = max, min if max < min
  rand(min..max)
end

p random_number(50); # 隨機印出 0 ~ 49 之間的任何一個數字
p random_number(5, 30); # 隨機印出 5 ~ 29 之間的任何一個數字

# solving steps:
# 給定兩個參數預設值都為 0，當只傳入一個參數時，會將 max, min 互換再以 rand 生成 min（包含）和 max（不包含）之間的隨機整數。
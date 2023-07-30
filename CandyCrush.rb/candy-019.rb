# 編號：CANDY-019
# 程式語言：Ruby
# 題目：檢查是否為某個數字的平方數

# Method 1
# def is_square(num)
#   return false if num.negative?
#   Math.sqrt(num).to_i ** 2 == num
# end

# Method 2
def is_square(num)
  num >= 0 && Math.sqrt(num) % 1 == 0
end

p is_square(0); # true
p is_square(4); # true
p is_square(5); # false
p is_square(100); # true
p is_square(-4); # false
p is_square(-1); # false

# solving steps:
# 判斷數字大於等於 0 以及 開根號出來的數字除 1 的餘數要是 0。

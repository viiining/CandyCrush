# 編號：CANDY-014
# 程式語言：Ruby
# 題目：把鄰近的重複值去除，但仍照原本的順序排序
# 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

def unique_order(sequence)
  arr = []

  is_array_or_not = sequence.is_a?(Array) ? :each : :each_char
  
  sequence.send(is_array_or_not) do |element|
    arr << element if arr.last != element
  end

  arr
end

p unique_order("AABCC"); # [ 'A', 'B', 'C']
p unique_order("AAABBBCCBCC"); # [ 'A', 'B', 'C', 'B', 'C']
p unique_order([1, 2, 1, 2, 1]); # [ 1, 2, 1, 2, 1 ]
p unique_order([1, 1, 1, 2, 2, 2, 1]); # [1, 2, 1]

# solving steps:
# 宣告一個空陣列放入最後要輸出的答案，並判斷傳進來的參數是否為陣列，是的話，使用 :each 否則使用 :each_char，
# 以 send 方法將定義好的 is_array_or_not 傳入做使用，且後方判斷元素不相等就加入新陣列，最後返回新的陣列！
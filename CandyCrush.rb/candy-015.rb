# 編號：CANDY-015
# 程式語言：Ruby
# 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
# 範例：
#      "abcdef" -> ['ab', 'cd', 'ef']
#      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

def split_string(str)
  result = str.scan(/.{1,2}/)
  result << (result.pop + '_') if result.last&.length == 1
  result
end


p split_string("abcdef"); # ["ab", "cd", "ef"]
p split_string("abcdefg"); # ["ab", "cd", "ef", "g_"]
p split_string(""); # []

# solving steps:
# 用 scan 與正規表示法將傳進來的字串分開， 如果最後一個元素長度為 1，result.pop 取出最后一个元素，並加上 '_'，
# 加回 result，同时，使用 &. 避免 [] 的情況。

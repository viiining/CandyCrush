# 編號：CANDY-008
# 程式語言：Ruby
# 題目：傳入一字串，計算得分最高的字
#      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
#      所有傳入的字都是小寫。

# Method 1
# def highestScoreWord(input)
#   max_score = 0
#   max_word = ""

#   input.split(" ").each do |word|
#     score = word.bytes.sum {|char| char - 96}

#     if score > max_score
#       max_score = score
#       max_word = word
#     end
#   end

#   max_word
# end

# puts highestScoreWord("lorem ipsum dolor sit amet") # 印出 ipsum
# puts highestScoreWord("heyn i need a rubygem up to build this") # 印出 rubygem
# puts highestScoreWord("in time machine there are some bugs") # 印出 there

# # solving steps:
# # 設定最高分數與其單字的初始值，透過 split 與 each 方法，將陣列中每個單字做轉換成 ASCII Code的表達方式並計算分數，最後將 max_score 與 max_word 重新賦值並回傳最高分數的單字。

# Method 2
def highestScoreWord(input)
  words = input.split(" ")
  words_score = words.map do |word|
    score = word.bytes.sum { |char| char - 96 }
  end
  highest_score_index = words_score.index(words_score.max)
  words[highest_score_index]
end

puts highestScoreWord("lorem ipsum dolor sit amet") # 印出 ipsum
puts highestScoreWord("heyn i need a rubygem up to build this") # 印出 rubygem
puts highestScoreWord("in time machine there are some bugs") # 印出 there

# solving steps:
# 將傳進來的值用 split 方法轉為陣列後，對單字進行分數加總，並從中找出最大值的索引值，返回原本單字陣列中找出單字。
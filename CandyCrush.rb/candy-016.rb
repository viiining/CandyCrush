# 編號：CANDY-016
# 程式語言：Ruby
# 題目：把原本 snake_case 的字轉換成 camelCase 格式
# 範例："hello_world" -> "helloWorld"

def to_camel_case(str)
  str.gsub(/_./) { |match| match[1].upcase }
end

puts to_camel_case("book"); # book
puts to_camel_case("book_store"); # bookStore
puts to_camel_case("get_good_score"); # getGoodScore

# solving steps:
# 使用 gsub 方法與正規表示法找出匹配 '_' 與下一個字元，運用 block 來處理有匹配到的下一個字元做大寫轉換。

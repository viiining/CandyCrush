# 編號：CANDY-009
# 程式語言：Ruby
# 題目：移除網址中的錨點（Anchor）

def removeAnchor(url)
  url.split("#").first
end


puts removeAnchor("5xruby.tw"); # 印出 5xruby.tw
puts removeAnchor("5xruby.tw/#about"); # 印出 5xruby.tw/
puts removeAnchor("5xruby.tw/courses/?page=1#about"); # 印出 5xruby.tw/courses/?page=1

# solving steps:
# 用 split 指定的條件去做分割並回傳陣列，所以將 "#" 作為分割條件，抓取第一個元素，也就是 "#" 前方的元素。

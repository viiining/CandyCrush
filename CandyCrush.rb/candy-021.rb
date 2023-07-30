# 編號：CANDY-021
# 程式語言：Ruby
# 題目：實作 Stack 資料結構

class Stack
  def initialize
    @stack = []
  end

  def push(data = nil)
    @stack.push(data) if data != nil
  end

  def pop
    @stack.pop
  end

  def size
    @stack.size
  end
end

stack = Stack.new
stack.push(123);
stack.push(456);
stack.push();
p stack.size; # 印出 2

item = stack.pop(); # 取出元素
p item; # 印出 456

stack.pop(); # 繼續取出元素
p stack.size; # 印出 0

# solving steps:
# 建立一個空陣列來儲存資料。定義 push 方法：新增元素到堆疊頂部，如果參數是空值，先給預設值為 nil，避開沒有參數傳進來的狀況；
# pop 方法：移除堆疊頂部元素，回傳被移除的元素，size 方法：算陣列的大小。

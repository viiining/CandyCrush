# 編號：CANDY-022
# 程式語言：Ruby
# 題目：實作 Queue 資料結構

class Queue
  def initialize
    @queue = []
  end

  def enqueue(data = nil)
    @queue << data if data != nil
  end

  def dequeue
    @queue.shift
  end

  def length
    @queue.length
  end
end

queue = Queue.new;
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue();
p queue.length; # 印出 2

item = queue.dequeue();
p item; # 印出 123

queue.dequeue();
p queue.length; # 印出 0

# solving steps:
# 建立一個空陣列來儲存資料。定義 push 方法：新增元素到佇列，如果參數是空值，先給預設值為 nil，避開沒有參數傳進來的狀況；
# shift 方法：移除第一個元素，回傳被移除的元素；length 方法，算陣列的大小。
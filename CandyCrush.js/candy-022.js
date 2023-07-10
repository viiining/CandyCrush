// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構

class Queue {
  constructor() {
    this.list = [];
  }
  enqueue(data) {
    if (data !== undefined) {
      this.list.push(data);
    }
  }
  dequeue() {
    return this.list.shift();
  }
  get length() {
    return this.list.length;
  }
}

const queue = new Queue();
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue();
console.log(queue.length); // 印出 2

const item = queue.dequeue(); // 取出元素
console.log(item); // 印出 123

queue.dequeue(); // 繼續取出元素
console.log(queue.length); // 印出 0

// solving steps:
// 建立一個空陣列來儲存資料。建立 push() 方法：新增元素到佇列；shift() 方法：移除第一個元素，回傳被移除的元素。
// 設定 getter 取得資料長度。

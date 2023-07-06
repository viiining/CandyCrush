// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    if (data !== undefined) {
      this.items.push(data);
    }
  }

  pop() {
    return this.items.pop();
  }

  get size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(123);
stack.push(456);
stack.push();
console.log(stack.size); // 印出 2

const item = stack.pop(); // 取出元素
console.log(item); // 印出 456

stack.pop(); // 繼續取出元素
console.log(stack.size); // 印出 0

// solving steps:
// 建立一個空陣列來儲存資料。建立 push() 方法：新增元素到堆疊頂部；pop() 方法：移除堆疊頂部元素，回傳被移除的元素。
// 設定 getter 在 size()方法上取得資料長度。

class Stack {
  static size = undefined;
  static count = -1;
  static arr = [];

  constructor(size) {
    Stack.size = size;
  }

  push(element) {
    if (Stack.count == Stack.size-1) {
       console.log("Size limit exceeded!");
    } else {
      Stack.count++;
      Stack.arr[Stack.count] = element;
      return;
    }
  }

  pop() {
    if (Stack.count < 0) {
      return "Stack is empty!";
    } else {
      Stack.count--;
      return Stack.arr.pop();
    }
  }

  peek() {
    if (Stack.count < 0) {
      return "Stack is empty!";
    } else {
      return Stack.arr.slice(-1);
    }
  }
}

let myStack = new Stack(3);
myStack.push(12);
myStack.push(213);
myStack.push(233);
myStack.push(122);
myStack.push(231313);
console.log(myStack.peek());

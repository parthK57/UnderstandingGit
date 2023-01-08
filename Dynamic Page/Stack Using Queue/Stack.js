class Queue {
  static size = undefined;
  static count = -1;
  static arr = [];
  constructor(size) {
    Queue.size = size;
  }

  enqueue(element) {
    if (Queue.count == Queue.size - 1) {
      console.log("It is filled!");
    } else {
      Queue.count++;
      Queue.arr[Queue.count] = element;
    }
  }

  dequeue() {
    if (Queue.count < 0) {
      console.log("It is empty!");
    } else {
      const element = Queue.arr[0];
      Queue.arr = Queue.arr.slice(-Queue.count);
      Queue.count--;
      return element;
    }
  }

  front() {
    if (Queue.count < 0) {
      console.log("It is empty!");
    } else {
      return Queue.arr[0];
    }
  }

  rear() {
    if (Queue.count < 0) {
      console.log("It is empty!");
    } else {
      return Queue.arr[Queue.count];
    }
  }

  isEmpty() {
    if (Queue.count < 0) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if (Queue.count == Queue.size - 1) {
      return true;
    } else {
      return false;
    }
  }

  size() {
    return Queue.count + 1;
  }
}

class Stack extends Queue {
  constructor(size) {
    super(size);
  }

  push(element) {
    this.enqueue(element);
  }

  peek() {
    return this.rear();
  }

  pop() {
    if (Queue.count < 0) {
      return "It is empty!";
    } else {
      Queue.count--;
      return Queue.arr.pop();
    }
  }
}

const stack = new Stack(3);
stack.push(12);
stack.push(57);
stack.push(95);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
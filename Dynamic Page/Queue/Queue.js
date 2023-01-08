class Queue {
  static size = undefined;
  static count = -1;
  static arr = [];
  constructor(size) {
    Queue.size = size;
  }

  enqueue(element) {
    if (Queue.count == Queue.size - 1) {
      console.log("Queue is filled!");
    } else {
      Queue.count++;
      Queue.arr[Queue.count] = element;
    }
  }

  dequeue() {
    if (Queue.count < 0) {
      console.log("Queue is empty!");
    } else {
      const element = Queue.arr[0];
      Queue.arr = Queue.arr.slice(-Queue.count);
      Queue.count--;
      return element;
    }
  }

  front() {
    if (Queue.count < 0) {
      console.log("Queue is empty!");
    } else {
      return Queue.arr[0];
    }
  }

  rear() {
    if (Queue.count < 0) {
      console.log("Queue is empty!");
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

const myQueue = new Queue(3);
myQueue.enqueue(12);
myQueue.enqueue(57);
myQueue.enqueue(95);
console.log(myQueue.rear());

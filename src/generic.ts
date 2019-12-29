class Queue<T> {
  protected data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

const numberQueue = new Queue<number>();
numberQueue.push(0);
// numberQueue.push('1');
numberQueue.push(+'1');

console.log(numberQueue.pop()); // 0
console.log(numberQueue.pop()); // 1

const stringQueue = new Queue<string>();
stringQueue.push('Hello');
stringQueue.push('World');

let pop;
pop = stringQueue.pop();
console.log(pop && pop.toUpperCase()); // HELLO
pop = stringQueue.pop();
console.log(pop && pop.toUpperCase()); // WORLD

interface Person2 {
  name: string;
  age: number;
}

const myQueue = new Queue<Person2>();
myQueue.push({ name: 'Lee', age: 10 });
myQueue.push({ name: 'Kim', age: 20 });

console.log(myQueue.pop());
console.log(myQueue.pop());

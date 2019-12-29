interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

let todo: Todo;
todo = { id: 1, content: 'typescript', completed: false };

let todos: Todo[] = [];

const addTodo = (todo: Todo) => {
  todos = [...todos, todo];
};

addTodo(todo);
console.log(todos);

// private todos
const makeTodos = () => {
  const Todos: Todo[] = [];
  return {
    addTodo(td: Todo) {
      Todos.push(td);
    },
    getTodo(): Todo[] {
      return Todos;
    },
  };
};

const TodosA = makeTodos();
console.log(TodosA.getTodo());
TodosA.addTodo(todo);
console.log(TodosA.getTodo());

// 함수 인터페이스 정의
interface SquareFunc {
  (num: number): number;
}
const squareFunc: SquareFunc = (num: number) => num * num;

console.log(squareFunc(10)); // 100

interface IPerson {
  name: string;
  sayHello(): void;
}

class Person implements IPerson {
  constructor(public name: string) {}

  public sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

const greeter = (person: IPerson): void => {
  person.sayHello();
};

const me = new Person('Lee');
greeter(me);

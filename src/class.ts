interface IPerson {
  name: string;
  sayHello(): void;
}

class Person implements IPerson {
  // TS에서 readonly는 선언시 또는 생성자 내부에서만 값을 할당 가능
  // 그 외의 경우에는 할당할 수 없고 오직 읽기만 가능한 상태
  private readonly MSG: string = '123';

  // 접근 제한자가 선언된 생성자 파라미터 name은
  // 클래스 프로퍼티로 선언되고 지동으로 초기화된다.
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

class Foo {
  // tslint에서는 static이 맨 위에 위치하는게 좋다고 함 ㅇㅅㅇ..
  static staticMethod() {
    // 정적 메소드는 this를 사용할 수 없음
    // 정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킴(Foo)
    return 'staticMethod';
  }

  constructor(public prop: string) {}

  prototypeMethod() {
    return this.prop;
  }
}

// 정적 메소드는 클래스 이름으로 호출
console.log(Foo.staticMethod());

const foo = new Foo('123');
// 정적 메소드는 인스턴스로 호출할 수 없음
// console.log(foo.staticMethod());
console.log(foo.prototypeMethod());

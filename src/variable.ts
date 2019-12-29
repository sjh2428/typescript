let foo: string = 'hello';
// let bar: number = true;

// boolean
let isDone: boolean = false;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = 'blue';
color = 'red';
let myName: string = `Lee`; // ES6 템플릿 문자열
let greeting: string = `Hello, my name is ${myName}.`; // ES6 템플릿 대입문

// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3]; // 제네릭 배열 타입

// tuple - 고정된 요소수 만큼의 타입을 미리 선언 후 배열 또는 객체를 표현
let tuple: [string, number];
tuple = ['hello', 10];
// tuple = [10, 'hello']; // Error
// tuple = ['hello', 10, 'world', 100]; // Error
// tuple.push(true); // Error

let tuple2: { key: string; value: number };
tuple2 = { key: '하위', value: 123 };
// tuple2 = { key: 123, value: '하위' }; // Error
// tuple2 = { 1: '2' } // Error

// enum - 열거형은 숫자값 집합에 이름을 지정한 것이다.
enum Color1 {
  Red,
  Green,
  Blue,
}
let c11: Color1 = Color1.Red;
let c12: Color1 = Color1.Green;
let c13: Color1 = Color1.Blue;
console.log(c11, c12, c13); // 0 1 2

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let c21: Color2 = Color2.Red;
let c22: Color2 = Color2.Green;
let c23: Color2 = Color2.Blue;
console.log(c21, c22, c23); // 1 2 3

enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c31: Color3 = Color3.Red;
let c32: Color3 = Color3.Green;
let c33: Color3 = Color3.Blue;
console.log(c31, c32, c33); // 1 2 4

enum Color4 {
  Red,
  Green = '초록',
  Blue = '파랑',
}
// 만일 숫자가 아닌 다른 type을 default로 넣어준다면
// 해당 원소 이후의 값들은 모두 default를 지정해주어야 함
let c41: Color4 = Color4.Red;
let c42: Color4 = Color4.Green;
let c43: Color4 = Color4.Blue;
console.log(c41, c42, c43); // 0 '초록' '파랑'

// class A {}
// interface T {}
// enum Color5 {Red = Color3, Green = T, Blue = [1], Orange = {}, Purple = null, Skyblue = A};
// enum Color6 {Red, Green = void, Blue = undefined, Orange = false, Purple = 3.14}
// Array, Object, undefined, null, Boolean, void, class, interface, enum 불가
// number, string 타입만 가능한듯함

// any - 타입을 추론할 수 없거나 타입체크가 필요하지 않은 변수에 사용
let notSure: any = 4;
notSure = '하위하위 함쏘하위';
notSure = false;

// void - 일반적으로 함수에서 반환값이 없을 경우 사용
function warnUser(): void {
  console.log('This is warning message');
}

// never - 결코 발생하지 않는 값
function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw Error(message);
}

// 타입은 소문자, 대문자를 구별하기 때문에 주의.
// TS가 기본으로 제공하는 타입은 모두 소문자.
// string - 원시 타입 문자열 타입
let primitiveStr: string;
primitiveStr = 'hello'; // OK

// 원시 타입 문자열 타입에 객체를 할당
// primitiveStr = new String('hello'); // Error
/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/

// String - String 생성자 함수로 생성된 String 래퍼 객체 타입
let objectStr: String;
objectStr = 'hello'; // OK
objectStr = new String('hello'); // OK

// 위와 같이 String 래퍼 객체 타입을 타입으로 지정한 것 처럼 객체의 유형도 타입으로 지정 가능
// Date
const today: Date = new Date();

// HTMLElement
// const elem: HTMLElement = document.getElementById('myId'); // Error
// document.getElementById는 return값이 HTMLElement | null이기 때문에 에러

// const elem: HTMLElement | null = document.getElementById('myId'); // OK
// document상에서 동작되는 것이 아니기 때문에 현재는 에러

let stringOrNumber: string | number;
stringOrNumber = '하위';
stringOrNumber = 123;
// stringOrNumber = {};
// stringOrNumber = [];

let stringAndNumber: string & number;
// 선언은 되는거 같은데 언제 이런 경우가 나올까 ㅇㅅㅇ..?

let typeTest: Color1 | number | String; // Color1은 enum

// class Person2 타입
class Person2 {}
const person2: Person2 = new Person2();

// 타입 추론
// foo2는 타입을 선언하지 않았으나 타입 추론에 의해 변수의 타입이 결정됨
let foo2 = 123;
// foo2 = 'hi'; // TS는 정적 타입 언어이므로 에러

let foo3; // let foo3: any와 동치
foo3 = 'Hello';
console.log(typeof foo3); // string
foo3 = true;
console.log(typeof foo3); // boolean

const makePrivateVariable = (v: number) => {
  let value: number = v;
  return {
    setValue(val: number): void {
      value = val;
    },
    getValue(): number {
      return value;
    },
  };
};

const ten = makePrivateVariable(10);
console.log(ten.getValue());
ten.setValue(20);
console.log(ten.getValue());

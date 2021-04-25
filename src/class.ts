/**
 * Typescript는 C++나 자바와 같은 객체지향 언어에서 흔히 볼 수 있는 
 * class, private, public, protected, implemennts, extends와 같은 키워드를 제공한다.
 */

class Person1 {
  name? : string;
  age? : number;
}
let jack1 : Person1 = new Person1();
jack1.name = 'Jack';
jack1.age = 32;

/**
 * Typescript는 생성자의 매개변수에 public과 같은 접근 제한자를 붙이면
 * 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작한다.
 * 즉, Person2 클래스는  Person3 클래스를 함축해서 구현한 것.
 */

class Person2 {
  constructor(public name: string, public age? : number) {};
}
let jack2 : Person2 = new Person2('khyunjiee', 25);
console.log(jack2);

class Person3 {
  name: string;
  age? : number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}
let jack3 : Person3 = new Person3('khyunjiee', 25);
console.log(jack3);

/**
 * 클래스에서 인터페이스를 사용할 때는 implements 키워드를 사용한다.
 * 인터페이스는 속성을 만들지 않기 때문에 
 * 클래스에서 반드시 인터페이스가 정의하고 있는 속성을 멤버 속성으로 포함해야 한다.
 */

interface IPerson4 {
  name: string,
  age? : number
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}
let jack4: IPerson4 = new Person4('khyunjiee', 25);
console.log(jack4);

/**
 * Typescript는 abstrack 키워드를 사용해 추상 클래스를 만들 수 있다.
 * 추상 클래스는 자신의 속성이나 메서드 앞에 abstract를 붙여 
 * 나를 상속한 다른 클래스에서 이 속성이나 메서드를 구현하게 한다.
 */

abstract class AbstractPerson5 {
  abstract name: string;  // abstract가 붙었으므로 new 연산자를 적용해 객체를 만들 수 없다.
  constructor(public age?: number) {}
}

/**
 * Typescript는 extends 키워드를 사용해 상속 클래스를 만든다.
 * Person5 클래스는 APerson5 추상 클래스를 상속해 
 * APerson5가 구현한 age를 얻고 name 속성을 구현해야 한다.
 */

abstract class APerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}

class Person5 extends APerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}
let jack5: Person5 = new Person5('khyunjiee', 25);
console.log(jack5);

/**
 * static 속성
 * 클래스의 정적 속성은 '클래스 이름.정적 속성 이름' 형태의 
 * 점 표기법을 사용해 값을 얻거나 설정한다.
 */

class A {
  static initValue = 1;
}
let initVal = A.initValue;
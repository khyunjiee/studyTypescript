/**
 * 타입스크립트 타입
 * number, boolean, string, object
 */

// 타입 주석 (type annotation)
let n1 : number = 1;
let b : boolean = true;
let s : string = 'hello';
let o : object = {};

// 타입 추론 (type interface) -> javascript와의 호환성을 위해 사용
let n2 = 1;
let b2 = true;
let s2 = 'hello';
let o2 = {};

// any 타입
let a : any = 0;
a = 'hello';
a = true;
a = {};

// undefined 타입
let u : undefined = undefined;
// u = 1;  // Type '1' is not assignable to type 'undefined' 오류 발생

// 템플릿 문자열
let count = 10, message = 'Your count';
let result = `${message} is ${count}`;
console.log(result);

let person: object = {name: 'khyunjiee', age: 25};
// person.name   // object 타입은 name 속성을 가지지 않으므로 오류 발생.
(<{name: string}>person).name   //타입 변환 구문으로 오류 해결

/**
 * 타입 단언
 */

export default interface INameable {
  name: string
};

let obj: object = {name: 'khyunjiee'};
let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;
console.log(name1, name2);
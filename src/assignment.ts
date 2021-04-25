/**
 * 구조화 (structuring)
 * 인터페이스나 클래스로 사용하여 관련된 정보를 묶어 새로운 타입으로 표현하는 것
 */

export interface IPerson {
  name: string,
  age: number
}

export interface ICompany {
  name: string,
  age: number
}

let khyunjiee: IPerson = {name: 'Jack', age: 27}, 
    jane: IPerson = {name: 'Jack', age: 24};
let sopt: ICompany = {name: 'Sopt', age: 28},
    lane: ICompany = {name: 'Naver', age: 44};

/**
 * 구조화된 데이터는 어떤 시점에서 데이터의 일부만 사용할 때가 있다.
 * 비구조화 할당은 구조화된 코드에서 데이터의 일부만 변수에 저장하는 것이다.
 * 비구조화 할당은 객체와 더불어 배열과 튜플에도 적용할 수 있다.
 * 비구조화 할당을 객체에 적용하려면 얻고 싶은 속성을 중괄호로 묶는다.
 */

// let name = khyunjiee.name, age = khyunjiee.age;
let {name, age} = khyunjiee;

/**
 * 잔여 연산자 -> ...
 * 사용되는 위치에 따라 잔여 연산자 혹은 전개 연산자라고 한다.
 */

let address : any = {
  country: 'Korea',
  city: 'Seoul',
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong 123-456',
  address3: '789 street, 2 Floor ABC Building'
}

// country, city를 제외한 나머지 속성을 detail 변수에 저장
const {country, city, ...detail} = address;
console.log(detail);

// 전개연산자: 점 3개 연산자가 비구조화 할당문이 아닌 곳에서 사용될 때
let coord = {...{x:0}, ...{y:0}};
console.log(coord);

let part1 = {name: 'khyunjiee'};
let part2 = {age: '25'};
let part3 = {city: 'Seoul', country: 'Kr'};
let merged = {...part1, ...part2, ...part3};
console.log(merged);

"use strict";
/**
 * 객체의 타입을 정의하는 interface
 */
var good = { name: 'Jack', age: 32 };
var good2 = { name: 'Jack', age: 32, etc: true };
/**
 * 익명 인터페이스 (anonymous interface)
 * interface 키워드를 사용하지 않고 interface의 이름도 없는 interface를 만들 수 있다.
 * 주로 함수를 구현할 때 사용한다.
 */
var ai = { name: 'Jack', age: 32 };
function printMe(me) {
    console.log(me.etc ?
        me.name + " " + me.age + " " + me.etc :
        me.name + " " + me.age);
}
printMe(ai);

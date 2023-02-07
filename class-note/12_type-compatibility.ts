// 인터페이스
interface DevPerson {
  name: string;
  skill: string;
}

interface Human {
  name: string;
}

var devperson: DevPerson;
var human: Human;

class Person {
  name: string;
  skill: string;
}

devperson = new Person()
/**
 * 여기서 person을 developer에 할당할 수 없는 이유는 
 * person은 name 속성밖에 존재하지 않기 때문임
 * 
 */

// 함수 
var add = function (a: number) {
}

var sum = function (a: number, b:number) {
}

sum = add;

// 제네릭
interface Empty<T> {

}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2; // 제네릭 때문에 먼저 string으로 변하기 때문에 오류가 나게된다.
notEmpty2 = notEmpty1
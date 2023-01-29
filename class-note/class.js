function Person(name, age) {
    this.name = name;
    this.age = age;
}

class Person {
    //클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

// Person 함수와 Person 클래스의 기능은 동일하다.
// 프로토타입 언어 기반의 상속이 계속 유지가 되는 것이라 이해하면 된다.


const seho = new Person('세호', 30);
console.log(seho);

/** 
 * 클래스는 왜 프로토 타입과 연관이 되어 있는가 ?
 */

var user = {name:'captine', age:100}

var admin = { }

admin.__proto__ = user;
admin.name
admin.role = "admin"

// 빌트인 자바스크립드 API라고도 부름
// 단순히 객체 정보 확장이 아닌 정의된 기능들을 활용하기 위해서 쓰고 있었음을 이해하면 됨
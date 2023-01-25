// interface human {
//     name: string;
//     age: number;
// }

type human = {
    name:string;
    age:number;
}

var seho:human = {
    name:'세호',
    age: 30
}

/**
 * 타입과 인터페이스의 가장 큰 차이점
 * 1. 타입의 확장 가능 / 불가능 여부
 * 인터페이스는 상속을 통한 확장이 가능한데 타입은 확장이 불가능하다.
 * 좋은 소프트웨어는 확장의 용이해야하기 때문에 가급적이면 타입보다는 인터페이스를 사용해야 한다.
 */
class Human {
    // 타입스크립트에서는 클래스에서 사용할 멤버 변수의 타입을 정의해야한다.
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

/** 
 * private : 클래스 안에서만 사용이 가능함
 * public : 어디에서나 사용할 수 있음
 * readonly : 접근만 가능하고 수정이 불가
 */
// TS 문자열 선언
const str: string  = 'hello';
const num: number = 10;
const arr: Array<number> = [1,2,3];
const arr2: Array<string> = ["cap", "thor"]

const items: number[] = [1,2,3]

// TS 튜플 : 배열 각각의 인덱스에 타입이 정의된 것
let address: [string, number] = ['강남', 12];

// TS 객체
let obj: object = {}
// let person: object = {
//     name: 'cap',
//     age: 100
// }

let person: {name:string, age:number} = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show:boolean = true;
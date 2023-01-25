interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
var seho:User = {
    age:33,
    name:"세호"
}

// 함수에 인터페이스 활용
function getUser(user:User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age:100
}
getUser(capt)

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a:number, b:number):number;
}

var sum: sumFunction;
sum = function(a:number, b:number) {
    return a+b;
}

// 인덱싱
interface StringArr {
    [index:number]:string;
}

var arr = ['a','b','c']

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]:RegExp
}

var obj:StringRegexDictionary {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value) {

}) 

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}


interface Developer extends Person {
    language: string;
}

var captine: Developer = {
    language: 'ts',
    age: 24,
    name: "Seongjoon K"
}
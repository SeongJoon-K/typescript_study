// function logMessage(value: string) {
//     console.log();
// }
logMessage('hello')
logMessage(100)


var Seong: string | number | boolean;
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value ==='string') {
        value.toString();
    }
    throw new TypeError('value must be string or number')
}


interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    someone.name;
    someone.skill;
    someone.age;
}
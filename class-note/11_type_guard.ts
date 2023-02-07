interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {name: 'TOny', age:22, skill: "ironman"}
}

var tony = introduce()
console.log(tony.skill)

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill); 
}
if ((tony as Person).age) {
  var age = (tony as Person).age
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;  
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
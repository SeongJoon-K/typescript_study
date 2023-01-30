// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('하이');
// logText(true);

// function logText<T>(text:T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이')
// logText<number>(123)

/**
 * 함수를 사용할 때 사용하는 시점에 타입을 넘기는 것이다.
 */

function logText(text:string|number) { //여러가지 타입으로 받을 수 있는 게 유니온 타입이다.
    console.log(text);
    // text.
    // 유니온 타입을 사용해 메소드에 접근하면 string, number모두 겹치는 메소드 미리보기만 제공함
    return text;
}

const a = logText('a');
a.split('')

/**
 * 해당 유니온 타입 input을 받는 함수에서 a를 문자형으로 받아도 커서를 갖다 댔을때
 * number가 들어오는 경우 split 메소드가 제공되지 않는다고 한다. 
 * 이런 문제가 발생하는 이유는 input에 대한 것은 해결이 되었으나
 * 반환 값에 대한 해결이 되지 않았을 때 발생하는 것이다.
 */
// User 라는 인터페이스를 만들거임
// 인터페이스는 이러한 동일한 규칙으로 사용하겠다 라는 상호간의 약속이라고 보면된다.
interface User {
    age: number;
    name: string;
}

// 1. 변수에 인터페이스 활용
const james: User = {
    age: 33,
    name: '제임스'
}

// 2. 함수에 인터페이스 활용
function getUser(user : User) {
    console.log(user)
}


/* ❌ 이렇게 하면 지정해놓은 인터페이스 형식 때문에 getUser(capt) 에서 에러난다. (age 요소도 있어야함.)  

const capt = {
    name : 'oreeyo'
}

getUser(capt)

*/

const capt = {
    age : 35,
    name : 'oreeyo'
}

getUser(capt)


// 3. 함수의 스펙(구조)에 인터페이스를 활용

interface sumFunction {
    (a: number, b: number) : number
}

const sum_1 = function(a:number , b:number) : number {
    return a + b;
}

// 4. 인덱싱

interface StringArray {
    [index : number] :string;
}

const arr_ : StringArray = ['a', 'b', 'c'];

// arr_[0] = 10
arr_[0] = 'd'



// 5. 딕셔너리 패턴
interface StringRegexDictionary {
    [key : string] : RegExp;
}

const obj_ : StringRegexDictionary = {
    cssfile : /\.css$/,
    jsfile : /\.js$/
}

// obj_['cssfile'] = '';

obj_['cssfile'] = /\.ts$/;




// 6. 인터페이스 확장

interface Person {
    name : string;
    age : number;
}

interface Developer  extends Person{
    language: string;
}

const oreeyo : Developer = {
    language : 'ts',
    name : 'oreeyo',
    age : 30
}
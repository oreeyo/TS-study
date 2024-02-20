// any 로 타입을 지정해주는건 타입스크립트의 장점을 없애버리는거다.

// 유니온 타입  
function logMessage (value : string | number) {
    console.log(value);
}

logMessage('oreeyo')
logMessage(123)


var geon : string | number | boolean ;

function logMessage___ (value : string | number) {
    // 타입 가드 (type guard) : 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정.
    if(typeof value === 'number') {
        value.toLocaleString();
    } 

    if(typeof value === 'string') {
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage___('hello');
logMessage___(100);


interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 유니온 타입에서는 공통된 속성 타입만 타입 검증을 안거치고 끌어와 쓸 수 있다.
// 공통되지 않은 속성타입은 타입가드나 타입검증을 통해 쓸 수 있다.
function askSomeone(someone: Developer | Person){
    console.log(someone.name)   // 공통속성은 직접 접근 가능
    // someone.skill;           // 공통이 아닌 속성은 직접 접근 불가능
    // someone.age;             // 공통이 아닌 속성은 직접 접근 불가능
}

// 타입가드를 사용해서 접근 가능하게 하기.
function askSomeone__(someone: Developer | Person){
    console.log(someone.name);

     // 타입 가드를 사용하여 타입을 구체화
     if ('skill' in someone) {
        console.log(someone.skill); // Developer 타입일 경우 접근 가능
    }

    if ('age' in someone) {
        console.log(someone.age); // Person 타입일 경우 접근 가능
    }
}

askSomeone__({ name :'oreeyo' , skill : 'JS' })
askSomeone__({ name :'oreeyo' , age : 30 })
askSomeone__({ name :'oreeyo' , skill : 'TS', age : 30 }) // askSomeone__ 함수는 someone의 타입을 런타임에 확인하고 해당 타입의 속성에 접근합니다. 이경우 모든 프로퍼티가 출력됨



// 인터섹션 사용
// 여기에서 someone은 Developer 와 Person 특성을 모두 갖춘 하나의 타입 이라고 보면된다.
function askSomeone___(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}
// 인터섹션을 사용한 함수라면 함수를 호출할 때에는 정의된 타입 요소들을 전부 사용해야한다.
askSomeone___({name : 'oreeyo' , skill : 'TS', age : 30})
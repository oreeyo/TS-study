// js 문자열 선언
// var str = 'hello';

// ts 문자열 선언
const str : string = 'hello';
const num : number = 1;

// 둘다 동일한 number 타입의 array임.
const arr : Array<number> = [1, 2, 3];
const items : number[] = [4, 5, 6];

const heros : Array<string> = ['thor', 'captin', 'Hulk'];

// ts 튜플 => 모든인덱스에 타입이 정의 되어있는 배열
const tuple : [string, number] = ['gangnam', 10];

// ts 객체 => 객체의 형태만 지니게 되면 별 문제 없이 지나갈 수 있지만, 
//           객체의 요소 타입까지 지정을 하게 되면 엄격히 검사한다.

const obj : object = { };

const person : {name : string , age : number} = {
    name : "thor",
    age : 1000
}


// ts 진위값 => 참 거짓
const bool : boolean = true;
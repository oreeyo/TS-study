// 타입 지정해주는 방법 

// 1. 인터페이스 사용
interface Person {
    name : string;
    age : number;
}


const ore1 : Person = {
    name : 'ore',
    age : 30
}

// 2. 타입별칭 사용
type Person_ = {
    name : string;
    age : number;

}

const ore2 : Person_ = {
    name : 'ore',
    age : 30
}


// 이렇게 타입 별칭을 활용하게 되면 좀 더 쉽게 타입을 정의할 수 있고, 가독성이 높아진다.
type myString = string;
const str : myString = 'oreeyo';

type ExObj = { id : string; title : string; done : boolean };
function getObj (obj : ExObj) {
    return console.log(obj);
}


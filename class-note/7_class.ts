class ___Person {
    private name: string;
    public age : number;
    readonly role : string;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

/*
클래스 상단에서 속성에 타입을 지정하는 것은 
해당 속성이 어떤 타입을 가질 것인지 정의하는 것입니다. 

반면에,
constructor 매개변수에서 타입을 지정하는 것은
해당 constructor를 호출할 때 전달되는 인수의 타입을 정의하는 것입니다.

이 두 타입 지정은 서로 다른 목적으로 사용되며, 둘 다 필요합니다.
*/

/*
리액트 예전문법 - 클래스 기반 코드
class App extends React.Component {

}
*/


/*
리액트 최신문법 - 훅 기반의 함수형 코드
function App() {
    return <div>Hello  World</div>
}
*/
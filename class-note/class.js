function Person (name, age) {
    this.name = name;
    this.age = age;
}

var oreeyo = new Person('ore', 30);

// ---------

class _Person {
    constructor(name, age) {
        console.log('클래스 생성됨')
        this.name = name;
        this.age = age;
    }
}

var _oreeyo = new _Person('ore', 30) // '클래스 생성됨' 출력
console.log(_oreeyo);

//  7번째 행까지 있는 생성자 함수로 만든 결과와
//  10번째 행 이후로 짜여진 클래스로 만든 결과는 같다.
// 클래스가 생겨난 이유는 기존 자바 또는 객체지향언어 사용자들이 쉽게 접근할 수 있도록
// 만든것이다.
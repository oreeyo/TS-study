function logText(text : string) {
    console.log(text);
    return text;
}

function logNumber(num : number) {
    console.log(num);
    return num;
}

logText("soso");
logNumber(123);

// 하지만 이렇게 타입을 따로 나눠서 함수를 생성하게 되면 중복도 일어나고, 가독성이 떨어진다.

// 이걸 해결하기 위해 유니온 타입을 사용해서 함수를 생성해보지만...
function _logtext(text: string | number) {
    console.log(text);
    return text;
}

const a = _logtext('a');

// a.split('')   number | string 으로 추론해버리기 때문에,
// 타입이 확실치 않아서 split 메서드를 사용하지 못한다.


// 그래서 이런 점들을 보완하기 위해 제네릭을 사용하게 되면 엄청난 유연함을 보여준다. 최고인듯.
function __logText<T>(text : T) : T {
    console.log(text);
    return text;
}

// 이렇게 호출할 때 마다 타입을 지정해줘서 적재적소에 사용가능함.
const str = __logText<string>('ㅋㄷㅋㄷ');
str.split('');

const login = __logText<boolean>(true);
// 함수의 파라미터에 타입을 정의하는 방식이다.
function _sum(a:number, b:number) {
    return a+b;
}

_sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add():number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function __sum(a:number, b:number):number {
    return a+b;
}

// js와는 다르게 정의되지 않은 파라미터들을 넣을 때에는 ts에서 에러를 발생시켜준다.
_sum(10,20,30,40)


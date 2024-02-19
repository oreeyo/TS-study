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
// _sum(10,20,30,40)


// 함수의 옵셔널 파라미터
// 옵셔널 파라미터는 앞에 추가적으로 물음표를 붙인건데,
// ?: 로 정의되는 파라미터는 써도 되고 안써도 된다 라는 걸 의미한다.
function log(a:string, b?:string) {
    if(b){
        console.log(`${a} 는 ${b} 이다`)
    }else {
        console.log(`${a} 이다`)
    }
}

// 파라미터를 a 위치에만 넣어줘도 ts에서는 에러를 발생시키지 않는다.
log("oreeyo", "개발자")
log("oreeyo")




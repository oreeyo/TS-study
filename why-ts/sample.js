// typescript 를 쓰지 않고도 js 에서 타입 체크를 흉내내보기


// @ts-check

/**
 * @param {number} a 첫번째숫자
 * @param {number} b 두번째숫자
 */

function sum1(a, b) {
    return a + b;
}

sum1(10, 20)

// sum1(10, '20') 주석을 풀면 20이 string이라서 타입체크에서 에러가 나는것을 볼 수 있다. 이게 @ts-check의 기능이다.

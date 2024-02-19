function sum (a: number, b: number): number {
 return a + b;
}

const result = sum(10,20);
result.toLocaleString()

// ts에서는 해당 변수의 타입을 추론하는 기능이 있음
// 그래서 result에 . (점) 만 찍어도 해당 result가 숫자 타입인 걸 추론하고, 숫자 타입에 쓸 수 있는 api 목록들을 제시 해준다.

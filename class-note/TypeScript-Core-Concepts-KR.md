
# TypeScript 핵심 개념

TypeScript에서는 타입 안정성과 개발 편의성을 높이기 위해 몇 가지 핵심 개념을 제공합니다.  
여기에는  
타입 추론(Type Inference),  
타입 호환(Type Compatibility),  
타입 단언(Type Assertion),  
타입 가드(Type Guards)가 포함됩니다.  
이 문서는 각 개념을 설명하고, 언제 사용해야 하는지, 그리고 코드 예시를 제공합니다.

## 1. 타입 추론

### 개념
TypeScript는 초기값을 바탕으로 변수의 타입을 자동으로 추론할 수 있습니다.  
이 기능은 명시적인 타입 선언의 필요성을 줄여 코드를 간소화합니다.

### 사용 시기
- 초기값이 있는 변수를 선언할 때.
- 반환 표현식이 있는 함수의 반환 타입을 결정할 때.

### 코드 예시
```typescript
let message = '안녕, TypeScript'; // `message`는 문자열로 추론됩니다.
```

## 2. 타입 호환

### 개념
TypeScript는 구조적 타입 시스템을 사용하여, 멤버가 호환되면 타입이 호환됩니다.  
이를 통해 코드의 구성과 재사용성이 유연해집니다.

### 사용 시기
- 한 변수에서 다른 변수로 값을 할당할 때.
- 함수 매개변수와 반환값에서.

### 코드 예시
```typescript
interface Named {
  name: string;
}

let person: Named;
let employee = { name: 'Alice', position: 'Developer' };

person = employee; // `employee`는 `name` 속성을 가지고 있기 때문에 호환됩니다.
```

## 3. 타입 단언

### 개념
타입 단언을 사용하면 TypeScript의 추론된 타입을 오버라이드하고,  
컴파일러에게 변수를 다른 타입으로 취급하도록 지시할 수 있습니다.

### 사용 시기
- TypeScript보다 타입에 대해 더 많은 정보를 알고 있을 때.
- 기본 데이터 구조에 대한 확신이 있을 때 타입을 변환할 때.

### 코드 예시
```typescript
let someValue: any = '이것은 문자열입니다.';

let strLength: number = (someValue as string).length;
```

## 4. 타입 가드

### 개념
타입 가드를 사용하면 조건 블록 내에서 객체의 타입을 좁혀,  
해당 객체가 특정 타입 기준을 만족하는지 확인할 수 있습니다.

### 사용 시기
- 런타임 검사를 수행하여 올바른 타입이 사용되고 있는지 확인할 때.
- 하나 이상의 타입을 가질 수 있는 매개변수가 있는 함수에서.

### 코드 예시
```typescript
function isString(test: any): test is string {
  return typeof test === 'string';
}

if (isString(someValue)) {
  console.log(someValue.length); // 여기에서 `someValue`는 문자열로 취급됩니다.
}
```

이러한 TypeScript의 핵심 개념들은 타입을 관리하는 데 있어 견고한 프레임워크를 제공함으로써 개발 경험을 크게 향상시킵니다.

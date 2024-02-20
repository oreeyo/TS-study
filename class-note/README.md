
# TypeScript Optional Parameters

TypeScript에서 Optional Parameter는 함수를 정의할 때, 해당 파라미터가 필수가 아니라 선택적으로 제공될 수 있음을 나타냅니다. 즉, 이 파라미터에 값을 전달하지 않아도 함수가 정상적으로 호출될 수 있으며, 파라미터가 제공되지 않았을 때를 대비해 해당 파라미터는 `undefined`가 될 수 있습니다.

## 정의 방법

Optional Parameter는 파라미터 이름 뒤에 `?` 기호를 추가하여 표시합니다. 이렇게 함으로써, 해당 파라미터는 선택적으로 처리됩니다.

## 예제

예를 들어, 어떤 사용자의 이름을 인사말과 함께 출력하는 함수가 있고, 사용자의 이름이 선택적으로 제공될 수 있다면, 다음과 같이 함수를 정의할 수 있습니다:

```typescript
function greet(name?: string) {
  if (name) {
    console.log(\`Hello, ${name}!\`);
  } else {
    console.log("Hello!");
  }
}

greet();           // 출력: "Hello!"
greet("Alice");    // 출력: "Hello, Alice!"
```

위 예제에서 `greet` 함수의 `name` 파라미터는 Optional Parameter로 정의되었습니다. 따라서 `name` 파라미터에 값을 제공하지 않고 `greet` 함수를 호출해도 TypeScript 컴파일러는 에러를 발생시키지 않습니다. 이런 방식으로 Optional Parameters는 함수에 더 많은 유연성을 제공하며, 다양한 시나리오에서 함수를 재사용할 수 있게 합니다.

<br>
<br>

# TypeScript의 Interface 🚀

## 📘 개요

TypeScript의 `interface`는 코드 내에서 사용자 정의 타입을 정의할 수 있게 해주는 강력한 기능입니다. `interface`를 사용하면 객체의 구조를 명확하게 지정할 수 있으며, 코드의 가독성과 유지 보수성을 높일 수 있습니다.

## 📌 기본 사용법

`interface`를 사용하여 객체의 구조를 정의할 수 있습니다. 예를 들어, 사용자 객체를 정의하는 인터페이스는 다음과 같이 작성할 수 있습니다:

```typescript
interface User {
  id: number;
  name: string;
  age?: number; // 선택적 속성
}
```

## 🛠️ 확장성

`interface`는 확장 가능하여, 한 인터페이스가 다른 인터페이스를 상속받을 수 있습니다. 이를 통해 코드의 재사용성을 높일 수 있습니다:

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}
```

## 🔍 선택적 속성과 읽기 전용 속성

- **선택적 속성**: 객체가 특정 속성을 가질 수도 있고, 가지지 않을 수도 있음을 나타냅니다. `?` 기호를 사용합니다.
- **읽기 전용 속성**: 객체 생성 후에는 변경할 수 없는 속성을 정의할 때 사용합니다. `readonly` 키워드를 사용합니다.

```typescript
interface Car {
  readonly make: string;
  model: string;
  year?: number;
}
```

## 💡 함수 타입

`interface`를 사용하여 함수의 타입을 정의할 수도 있습니다. 
이는 함수의 시그니처를 명시적으로 선언하는 데 유용합니다:

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

## 🎯 정리

`interface`는 TypeScript에서 타입 체크를 위한 강력한 도구입니다. 
객체의 구조를 명확하게 정의하고, 코드의 안정성을 높이며, 개발 과정에서의 오류를 줄일 수 있습니다.

<br>
<br>
# TypeScript에서 Interface의 Indexing 📚

TypeScript는 강력한 타입 시스템을 가진 JavaScript의 상위 집합입니다. TypeScript의 핵심 기능 중 하나는 개발자가 명시적으로 타입을 정의할 수 있게 하는 `interface`입니다. `interface`를 사용하면 객체의 구조를 정의할 수 있으며, 이를 통해 더 안정적이고 유지보수하기 쉬운 코드를 작성할 수 있습니다. 특히, `interface`의 indexing 기능은 객체의 속성 이름과 타입을 동적으로 정의할 수 있게 해줍니다.

## 1. 타입스크립트에서 Interface의 Indexing의 개념 🧐

Interface의 Indexing은 `index signature`를 사용하여 객체의 모든 속성이 특정 타입을 가지도록 강제합니다. 이는 미리 정의된 속성 이름이 아닌, 동적 속성 이름에 대해 타입을 지정할 수 있게 해줍니다.

## 2. 타입스크립트에서 Interface의 Indexing의 예시 📝

```typescript
interface StringDictionary {
  [key: string]: string;
}

let myDict: StringDictionary = {
  name: "John Doe",
  email: "john@example.com"
};
```

이 예시에서 `StringDictionary` 인터페이스는 문자열 키에 대해 문자열 값을 가지는 객체를 정의합니다. 이를 통해 다양한 속성을 동적으로 추가할 수 있습니다.

두번째 예시에서는 string 값을 대입해야하는데, number 값을 대입해보겠다.

![alt text](image.png)

보다시피 Error 가 뜬다.



## 3. 타입스크립트에서 Interface의 Indexing의 활용 🔍

Interface의 Indexing은 API 응답, 설정 객체 등 다양한 곳에서 유용하게 활용됩니다. 예를 들어, 서로 다른 키와 값을 가진 객체를 유연하게 처리할 수 있습니다. 이 기능을 사용함으로써 TypeScript 코드의 유연성과 재사용성이 향상됩니다.

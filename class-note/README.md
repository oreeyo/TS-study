
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



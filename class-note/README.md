
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

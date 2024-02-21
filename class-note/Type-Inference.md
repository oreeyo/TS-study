
# `let` vs `const` 타입 추론 :mag:

TypeScript에서 `let`과 `const`를 사용하여 변수를 선언할 때,  
같은 값이 할당되어 있어도  
타입 추론에 있어서 다른 결과가 나타나는 이유에 대해 알아보겠습니다. :thinking:

## 1. 이유 :key:
  
`const`로 선언된 변수는 재할당할 수 없으므로,  
TypeScript는 `const`로 선언된 변수에 할당된 값을 그 변수의 타입으로 추론합니다.  
  
반면, `let`으로 선언된 변수는 재할당이 가능하기 때문에,  
TypeScript는 더 넓은 범위의 타입(예: 리터럴 타입 대신 기본 타입)을 추론합니다. (Type-Widening)

## 2. 개념 설명 :bulb:

### `const` 선언:

```typescript
const message = "Hello, TypeScript!";
```

위 경우, `message`는 문자열 리터럴 타입 `"Hello, TypeScript!"`로 추론됩니다.  
`const`로 선언된 변수는 변경할 수 없으므로,  
TypeScript는 변수에 할당된 구체적인 값을 타입으로 결정합니다.

### `let` 선언:

```typescript
let message = "Hello, TypeScript!";
```

이 경우, `message`는 넓은 의미의 `string` 타입으로 추론됩니다.  
`let`으로 선언된 변수는 재할당이 가능하기 때문에,  
TypeScript는 변수가 가질 수 있는 값의 범위를 넓게 해석합니다.

---

이러한 차이는 TypeScript가 타입 안정성과 유연성 사이의 균형을 맞추기 위한 설계 결정의 일부입니다.  
변수의 사용 의도에 따라 적절한 키워드(`let` 또는 `const`)를 사용하여,  
코드의 가독성과 안정성을 높일 수 있습니다. :rocket:

:sparkles: 명확한 의도를 가진 코드 작성을 위해 `let`과 `const` 사용을 적절히 구분합시다! :construction_worker:

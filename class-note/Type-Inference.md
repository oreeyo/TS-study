
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
### null 과 undefined 는 let으로 선언한 변수에 대입할 때는 any로 추론합니다. :bulb:  

---

### let 과 const의 Symbol 할당 차이

![image](https://github.com/oreeyo/TS-study/assets/107106269/6f210576-3dd1-468c-9895-8b4530090b7a)

sym 은 const일 때는 typeof sym 이었는데,  
let일 때는 symbol 입니다.  
typeof sym은 고유한 symbol을 의미합니다.  
const이므로 다른 symbol로 변경할 수 없는 symbol인 것이죠.  
  
### 타입스크립트에서는 이를 unique symbol이라고 표현합니다.
  
위 이미지에서 보이는 것처럼 unique symbol 끼리는 서로 비교할 수 없습니다.  
### 타입스크립트에서는 unique symbol끼리의 비교를 금지하고 있기 때문입니다. :bulb:   
다만 unique symbol과 일반 symbol끼리나,  
두개의 일반 symbol 끼리는 비교할 수 있습니다.  


---

이러한 차이는 TypeScript가 타입 안정성과 유연성 사이의 균형을 맞추기 위한 설계 결정의 일부입니다.  
변수의 사용 의도에 따라 적절한 키워드(`let` 또는 `const`)를 사용하여,  
코드의 가독성과 안정성을 높일 수 있습니다. :rocket:

:sparkles: 명확한 의도를 가진 코드 작성을 위해 `let`과 `const` 사용을 적절히 구분합시다! :construction_worker:

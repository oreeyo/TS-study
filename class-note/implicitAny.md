
# TypeScript의 `implicitAny` 이해하기 :mag_right:

TypeScript에서 `implicitAny` 설정은 타입을 명시적으로 지정하지 않았을 때,  
변수의 타입을 자동으로 `any`로 추론하게 하는 옵션입니다.  
  
이는 TypeScript의 타입 체크 기능을 약화시키며, 잠재적인 타입 관련 오류를 놓칠 수 있게 만듭니다. :warning:  

## 1. `implicitAny` 설명 :scroll:

`tsconfig.json` 파일에서 `noImplicitAny` 옵션을 `false`로 설정하거나 명시하지 않을 경우,  
TypeScript 컴파일러는 타입을 명시적으로 지정하지 않은 변수를 `any` 타입으로 처리합니다.  
이로 인해 개발자는 타입 안정성의 이점을 잃게 되며, 런타임 오류의 가능성이 증가합니다.

```json
{
  "compilerOptions": {
    "noImplicitAny": false
  }
}
```

이 설정은 빠른 프로토타이핑이나 기존 JavaScript 프로젝트를 TypeScript로 마이그레이션할 때 유용할 수 있습니다.  
하지만, 가능한 한 `noImplicitAny`를 `true`로 설정하여  
모든 변수와 매개변수에 명시적인 타입을 부여하는 것이 좋습니다.  

## 2. `implicitAny` 예시 :bulb:

### `implicitAny`가 허용될 때의 코드 예시:

```typescript
function add(a, b) {
  return a + b;
}
```

위 함수에서 `a`와 `b`의 타입이 명시되지 않았기 때문에,  
TypeScript 컴파일러는 이들을 `any` 타입으로 처리합니다.  
이는 `a`와 `b`에 어떤 타입의 값이든 전달될 수 있음을 의미합니다.  

### `noImplicitAny`가 활성화된 경우:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

`noImplicitAny` 옵션이 활성화되면,  
모든 변수와 매개변수에 대해 명시적인 타입을 지정해야 합니다.  
위 예시에서는 `a`와 `b`가 `number` 타입으로 명시되었습니다.  
이는 타입 안정성을 높이고, 잠재적 오류를 줄이는 데 도움이 됩니다.

---

:sparkles: 명시적 타입 지정을 통해 더 안정적이고 유지보수가 쉬운 코드를 작성합시다! :construction_worker:

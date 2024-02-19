
# TypeScript의 `tsconfig.json` 이해하기

## 1. `tsconfig.json`이란 무엇인가?

`tsconfig.json`은 TypeScript의 설정 파일입니다. 이 파일은 TypeScript 프로젝트의 루트 레벨과 컴파일러 옵션을 지정합니다. `tsconfig.json`을 사용하면 프로젝트에 포함된 파일, 컴파일 방법, 컴파일된 JavaScript 파일이 출력되는 위치 등, TypeScript 컴파일러의 동작 방식을 구성할 수 있습니다.

## 2. `tsconfig.json`의 옵션 종류

`tsconfig.json` 파일에 포함할 수 있는 옵션에는 여러 종류가 있습니다:

- **컴파일러 옵션**: TypeScript 코드에서 JavaScript를 생성하는 방식을 제어합니다.
- **프로젝트 참조**: 코드를 여러 프로젝트로 나누고 함께 컴파일할 수 있게 합니다.
- **감시 옵션**: 파일 변경을 감지했을 때 코드를 자동으로 다시 컴파일하는 TypeScript의 `--watch` 모드의 동작 방식을 구성합니다.

## 3. `tsconfig.json`의 옵션 역할

### 컴파일러 옵션

주요 컴파일러 옵션으로는 다음이 있습니다:

- `target`: TypeScript가 컴파일될 JavaScript 버전을 설정합니다 (예: `es5`, `es6`).
- `module`: 프로젝트에서 사용되는 모듈 시스템을 지정합니다 (예: `commonjs`, `amd`, `es2020`).
- `strict`: 모든 엄격한 타입 검사 옵션을 활성화합니다.
- `outDir`: 컴파일된 JavaScript 파일의 출력 디렉토리를 지정합니다.
- `include`와 `exclude`: 컴파일 과정에 포함되거나 제외될 파일을 지정합니다.
- `lib`: 컴파일에 포함될 라이브러리 파일 목록을 지정합니다.

### 프로젝트 참조

프로젝트 참조를 사용하면 TypeScript 프로젝트의 다른 부분 간의 의존성을 관리할 수 있습니다. 이는 여러 개의 작은 프로젝트로 나뉜 큰 프로젝트에 유용합니다.

### 감시 옵션

감시 옵션은 `--watch` 모드에서 파일이 변경될 때 TypeScript의 반응 방식을 사용자 정의합니다. 예를 들어, 디바운스 시간을 구성하거나 변경을 감시할 파일을 지정할 수 있습니다.

## 결론

`tsconfig.json` 파일은 TypeScript 프로젝트의 컴파일 설정을 관리하는 데 필수적입니다. `tsconfig.json`을 올바르게 구성함으로써 개발 워크플로우를 최적화하고 TypeScript 코드가 정확하게 JavaScript로 컴파일되도록 할 수 있습니다.

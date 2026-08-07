# 파트1. 실습 프로젝트 - TS 전환

기존 Node.js 웹 예제의 동작과 화면은 유지하면서 `main.js`와 `lib/template.js`를
TypeScript로 전환한 프로젝트입니다.


## 실행

1. 저장 데이터를 기본 데이터로 리셋

   ```
   pnpm run reset-data
   ```

2. 웹 서버 시작

   ```bash
   pnpm run start
   ```

3. 데이터를 초기화하며, 웹서버 시작 1, 2를 한번에 실행

   ```bash
   pnpm run start:reset
   ```

## TypeScript 전환 가이드

### 파일 구성

- `main.ts`: HTTP 서버와 라우팅 로직
- `lib/template.ts`: HTML 및 목록 템플릿 함수
- `tsconfig.json`: TypeScript 컴파일 설정
- `dist/`: `pnpm run build`로 생성되는 실행용 JavaScript (Git에 커밋하지 않음)

### 실행 흐름

1. `pnpm run build`가 TypeScript 파일을 `dist/`에 CommonJS JavaScript로 컴파일합니다.
2. `node dist/main.js`가 컴파일된 서버를 실행합니다.
3. `pnpm run start`는 위 두 단계를 한 번에 수행합니다.

소스 수정 후에는 `pnpm run build`로 타입 오류를 확인할 수 있습니다. 원래의 데이터
파일과 라우팅 로직은 그대로 사용하므로, 개발 중에는 기존과 같이 `http://localhost:3000`에서
화면을 확인하면 됩니다.

   




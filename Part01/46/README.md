# 46. App - 입력 정보에 대한 보안

### 강의 동영상

- https://youtu.be/xZztZWYuoo0



## 진행

- 지금까지의 구현 내용이, id값에 상대경로를 써서  접근을 하면 의도치 않은 파일의 내용을 출력할 수 있음.
  
  ```
  http://localhost:3000/?id=../password.js
  ```
  
- path의 base속성 사용

  ```javascript
  > var path = require('path')
  > path.parse('../password.js')
  {
    root: '',
    dir: '..',
    base: 'password.js',
    ext: '.js',
    name: 'password'
  }
  >
  ```

  파일명+확장자만 얻으려면, base속성을 활용하면 됨.

- id를 처리하는 부분을 전부 클린 세탁함.

## 의견

- 프로젝트 루트 : [web2-nodejs](../web2-nodejs)

## 정오표

- 없음

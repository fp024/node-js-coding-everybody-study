# 47. App - 출력 정보에 대한 보안

### 강의 동영상

- 사용자가 입력한 데이터를 조심해야하는 이유
  - https://youtu.be/-jSP6KQ7aww 

- 외부 모듈 사용 준비
  - https://youtu.be/_ApU_ObTIjQ

- 외부 모듈 (sanitize-html) 사용하기
  - https://youtu.be/cY3Tvxr4LNE




## 진행

- 크로스 사이트 스크립팅 공격에 대한 대비 이야기.
  
- sanitize-html 허용 태그 설정시 아래처럼 명시적으로 허용 태그를 설정하지 않는 이상은...
  
  ```javascript
  var sanitizeDescription = sanitizeHtml(description, { allowedTags: ['h2'] }); 
  ```
  
  기본 모양 테그는 대부분 허용되는 것 같다. 위 설정이 없으면 h1, h2 둘다 허용된다.

## 의견

- 프로젝트 루트 : [web2-nodejs](../web2-nodejs)

## 정오표

- 없음

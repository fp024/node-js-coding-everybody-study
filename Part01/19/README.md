# 19. App - 오류 페이지와 홈페이지 구현

### 강의 동영상

* Not found 오류 구현
  * https://youtu.be/pteR5pUpn2k

* App - 홈페이지 구현
  * https://youtu.be/krfmrBsWqzs 




##   진행

### Not found 오류 구현

* / 접근이 아닌 이상은 전부 404로 처리함

  ```javascript
  var pathname = url.parse(_url, true).pathname;
  // pathname이 / 인지 아닌지로 판단.
  ```

  

### App - 홈페이지 구현

*  Url 객체에서 pathname이 / 이면서, 쿼리스트링이 없으면 루트로 판단하고 홈 내용출력 




## 의견

* 프로젝트 루트 : [web2-nodejs](../web2-nodejs)
  
  


## 정오표

* 없음.

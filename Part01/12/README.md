# 12.  Node.js - 파일 읽기

### 강의 동영상

* https://youtu.be/X0wfdOJzq_Y




###  진행

*  .prettierrc 파일을 설정해서 따옴표로 처리되게 했다.
*  문장 끝 세미콜론은 그대로 둠

*   sample.txt  파일을 읽어서 콘솔에 출력

  ```javascript
  var fs = require('fs');
  
  fs.readFile('sample.txt', 'utf-8', function (err, data) {
    console.log(data);
  });
  ```

  


## 의견

* 프로젝트 루트 : [web2-nodejs](../web2-nodejs)
  * [web2-nodejs/nodejs](../web2-nodejs/nodejs)


## 정오표

* 없음.

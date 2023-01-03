# 32. App - POST 방식으로 전송된 데이터 받기

### 강의 동영상

* https://youtu.be/WMX5zcalAM0




##   진행

*   requet로부터 POST 데이터 받기

    ```javascript
    request.on('data', function (data) {
      // 조각조각 나눠서 데이터를 수신할 때마다 호출되는 콜백함수
      // 데이터를 처리하는 기능을 정의
    });
    
    request.on('end', function () {
      // 더이상 수신할 정보가 없으면 호출되는 콜백함수
      // 데이터 처리를 마무리 하는 기능을 정의
    });
    ```

    



## 의견

* 프로젝트 루트 : [web2-nodejs](../web2-nodejs)
  
  


## 정오표

* 없음

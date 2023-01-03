# 33. App -  파일 생성과 리다이렉션

### 강의 동영상

* https://youtu.be/dBZDJloj9xk




##   진행

*   한글 파라미터 값을 처리할 때는 다음과 같이 encodeURI 처리해서 보냄

    ```javascript
    fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
      var encodeTitle = encodeURI(title);
      response.writeHead(302, { Location: `/?id=${encodeTitle}` });
      response.end('success');
    });
    ```

*   301: 영구 이동

    *   요청한 페이지가 새 위치로 영구적으로 이동
    *   GET 또는 HEAD 요청에 대한 응답으로 이 응답을 표시하면 요청자가 자동으로 새 위치로 전달됨

*   302: 임시 이동

    *   현재 서버가 다른 위치의 페이지로 요청에 응답하고 있지마,ㄴ 요청자는 향후 요청할 때 원래 위치를 계속 사용해야함.



## 의견

* 프로젝트 루트 : [web2-nodejs](../web2-nodejs)
  
  


## 정오표

* 없음

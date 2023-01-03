# 29. Node.js - 패키지 매니저와  PM2

### 강의 동영상

* https://youtu.be/KzjTCREOIkk




##   진행

*   PM2 : Node.js로 만든 프로세스를 관리해주는 프로그램

*   PM2로 node.js 프로그램 실행

   ```bash
   > pm2 start min.js
   ```

*  프로세스 감시

   ```
   > pm2 monit
   ```

*  PM2로 프로그램을 실행하면 해당 Node.js 프로그램이 강제종료되어도 자동으로 재시작해줌.

*  프로세스 목록 확인후 중단

   ```bash
   > pm2 list
   # 목록에서 이름 확인 후...
   > pm2 stop {프로세스_이름}
   
   ```

*  소스 파일 감시

   *  소스가 변경되면 자동으로 재시작 해줌

      ```bash
      > pm2 start main.js --watch
      ```


* 실행 로그

  ```bash
  > pm2 log
  ```

  


## 의견

* 프로젝트 루트 : [web2-nodejs](../web2-nodejs)
  
  


## 정오표

* 없음

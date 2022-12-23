# 03 Node.js - 설치

### 강의 동영상

* https://youtu.be/0P8r0XqYfVw



### Node.js 설치

* 나는 nvm for windows 를 통해 설치했으므로 넘어가도 될것 같은데... 그동안 또 신버전이 나왔다. 1.1.10버전으로 nvm을 업데이트 해보자.

  * https://github.com/coreybutler/nvm-windows

  * 예전에는 nvm use 로 버전 번경할 때.. 반드시 관리자 명령 프롬프트로 처리하라고 알림 나왔는데..  알아서 권한 상승 선택 얼럿 뜨게 개선된 것 같다.

  * node 버전은 14 버전으로 하면 될 것 같다.

    ```
    C:\>nvm --version
    1.1.10
    
    C:\>nvm use 14.21.2
    Now using node v14.21.2 (64-bit)
    
    C:\>node -v
    v14.21.2
    
    C:\>
    ```

    ```
    C:\>node
    Welcome to Node.js v14.21.2.
    Type ".help" for more information.
    > console.log(1+1)
    2
    undefined
    >
    (To exit, press Ctrl+C again or Ctrl+D or type .exit)
    >
    
    C:\>
    ```

    

### 예제 폴더 생성

Part01 경로에다 [web2-nodejs](../web2-nodejs) 란 경로 생성



#### 에디터

Visual Code가 이미 설치되어있으므로 그것을 쓰면 되겠다.



### Mac, Linux 코드애니웨어에 Node.js 설치하기

* 이 부분은 안해도 될 것 같다.





## 의견

* 특이사항 없었다.

  

## 정오표

* 없음.
# Slack 클론 코딩[실시간 채팅 with React]

## 백엔드 세팅

1.  ```bash
    cd back
    npm i
    ```

2.  back 폴더 내에 .env 작성하기(COOKIE_SECRET과 MYSQL_PASSWORD 비밀번호 설정)

3.  MySQL, node 16버전(14나 17도 괜찮음) 설치

    - [MySQL 설치: Node.js 교과서 개정 3판 7장](https://thebook.io/080334/)

    ```bash
    $ brew install mysql
    $ brew services start mysql
    $ mysql_secure_installation

    $ mysql -h localhost -u root -p
    ```

4.  config/config.json 설정(MYSQL 접속 설정)

5.  스키마 생성

    ```bash
    npx sequelize db:create
    ```

6.  테이블 생성

    ```bash
    npm run dev
    ```

    서버 ctrl + c로 끄기

7.  stub 생성
    ```bash
    npx sequelize db:seed:all
    ```
8.  서버 켜기
    ```bash
    npm run dev
    ```
    1~7은 한 번만 <br />
    http://localhost:3095/

<br/>

> reference
>
> - https://github.com/ZeroCho/sleact

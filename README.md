# Docker 설정하기

## 사용 할 네트워크 생성

네트워크를 설정해 줘야 컴포넌트 끼리 네트워크가 됨.
단순함.. 같은 네트워크를 사용 하면 됨..

```bash
$ docker network create dbpack
```



## 실행하기

```bash
$ docker-compose up -d
```



## 데이터베이스 지우기

```bash
$ docker-compose down
```



## MongoDB express 접속

> http://localhost:8081
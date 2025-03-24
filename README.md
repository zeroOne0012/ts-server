# ts-server

# Dependencies 설치
- npm install

## 빌드 & 실행
- npm run build
- npm run start

## 개발 환경 실행
- npm run dev

## Structure
- server.ts: main, api 설정(app.ts) import, ws & api 서버 생성(현재 같은 포트)
- app.ts: 미들웨어 등록 & 라우터 등록(/api/api.ts)


- /api:
    - api.ts: /api/router의 모든 라우터 등록
    - /api/router: endpoint 정의 & endpoint -> controller 매핑
    - /api/controller: /api/router에서 정의한 endpoint에서 http 요청/응답 처리

- /service: 구체적 비즈니스 로직 계층(controller -> service)

- /repository: DB 접근/조작 계층(service -> repository)


- /ws:
    - ws.ts: /ws/namespace에 정의된 각 namespace의 함수 등록
    - ws/namespace: namespace 기능 정의


- /middleware
    - filter.ts: 권한에 요청 허용/거부
    - logget.ts: 요청 전/후 로그
    - exception-handler: service/repository 에서 controller로 throw 한 에러를 next로 넘겨받아 에러 응답

- /config
    - config.ts: 호스트 ip 주소, 포트, 개발모드 여부, DB 연결 정보 등
    - pool.ts: config.ts의 DB 연결 정보를 읽어 Postgres 커넥션 풀 생성
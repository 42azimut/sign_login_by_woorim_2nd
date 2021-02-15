## 2nd nodeJS study_coding <두번쨰 코딩 스터디!! 반복만이 살길이다!>
### 우리밋_woorimIT nodejs 백엔드 튜토리얼

[01. 로그인 & 회원가입 | 오리엔테이션](https://www.youtube.com/watch?v=2jwnbZKc66E&t=262s)
- 깊게 넓게 <두번쨰 코딩 연습 시작!!!

[02. 개발환경 세팅](https://www.youtube.com/watch?v=48lz8rw3PE8)
- installing git, nodeJS, vsc 

[03. express로 서버 띄워보기](https://www.youtube.com/watch?v=PkVV1OLaM5Q)
- mkdir login-lecture 
- 폴더명은 소문자에 띄어쓰기는 하이픈(-)이 관례(컨벤션)
- express : server framework
- npm 으로 express 섥치 (express 관련 모든 모듈이 함께 설치됨)
- root(/)경로 만들기 app.get()

[04. http로 서버 띄워보기](https://www.youtube.com/watch?v=7gF09WFGK4I)
- http로 서버 만드는 방법을 알기만 하자!
- http 내장모듈이다. npm으로 익스프레스처럼 설치다운할 필요가 없다! 
- req.url 은 주소창의 이름을 파싱해 올수 있다. 
- http는 익스프레스에 비해 코드가 복잡해진다! 
- 한글 깨짐 해결 : `res.writeHead(200, { "Content-type": "text/html; charset=utf-8"});`

[05. 로그인 화면 만들기 | 리얼 하드코딩으로](https://www.youtube.com/watch?v=AZtyyeCwNoc)
- 로그인, 루트 페이지 하드 코딩! 안좋은 코딩의 예시! 좋은 코드로 만들자!

[06. 로그인 뷰(view) 최적화 | MVC의 V(view) 분리하기](https://www.youtube.com/watch?v=dB1n8bKgn1E)
- index.html 삭제! 필요 없음! view engine을 통해 ejs파일로 만들어 html 대신 보여지게 만듬!
- html 어떤 엔진으로 해석하는가! >> ejs 로 설정! 
- `app.set("view engjine, "ejs");`  오타주의: "veiw engine" 
- `res.render("home/index);` ejs 파일을 렌더한다.
- `npm install ejs -s` ejs 모둘을 설치! 

[07. 라우팅 분리](https://www.youtube.com/watch?v=mL84PLyKss0&t=44s)
- routs/home 안에 app.get()을 분리한다! 
- 라우터 사용하기 위헤 `const router = express.Router();` 불러온다!
- use() 미들웨어 등록 메서드! 

[08. MVC의 C(controller) 컨트롤러 분리하기](https://www.youtube.com/watch?v=KwCjYdYv0_s)
```
router.get("/login", (res, req) => { res.render("home/login");
}); 에서 controller 는  
 
실제 컨트롤은  (req, res) => { res.render(....)} 이다! 
```
- home.ctrl.js 만들고, 콘트럴러 분리한다! 
- index.js 파일에서 home.ctrl 불러오고 ctrl로 객체 생성! 그리고 연결!

[09. app.listen() 모듈화](https://www.youtube.com/watch?v=W5bZy0Uzn6I&t=13s)
- login-lecture/bin/www.js 생성 
- app.listen() 분리 한다! 
- 서버 실행시 바뀐 주소 주위! node ./bin/www.js 

[10. package.json | package-lock.json | node_modules | npm start](https://www.youtube.com/watch?v=Jy9quSZbVTc)
- package.json 설치 하려면 
- `npm init` 설정 초기화
- `npm init -y` 설정 초기화 && 기본값 자동!! 
- package.json에서 "scripts": {"명령어 이름": "수행 명령어"}
- `npm start` 에서 위 스크립트 수행 명령어로 지정되어 있다!

[11. about git](https://www.youtube.com/watch?v=FN9nOLqyNEc)

[12. 폴더 구조 최적화](https://www.youtube.com/watch?v=BIjDK_xycaI)

[13. nodemon으로 서버 띄우기 | 개발 생산성 높이기](https://www.youtube.com/watch?v=yJch-m_OCYI&t=11s)

[14. DOM으로 HTML 객체 제어하기 | 프런트 기능 구현](https://www.youtube.com/watch?v=yJch-m_OCYI)

[15. fetch | 프런트에서 서버로 데이터 보내기](https://www.youtube.com/watch?v=QRo3-00n_ew)

[16. 로그인 API 만들기 in 서버 | 프런트의 요청데이터 파싱 | body-parser](https://www.youtube.com/watch?v=QLTcXMfcmLE&t=203s)

[17. 로그인 인증 기능 만들기 in 서버 | 유저 데이터 만들기](https://www.youtube.com/watch?v=lP1xx1A1vSU&t=8s)

[18. 서버의 응답데이터 처리 in 프런트](https://www.youtube.com/watch?v=x_h2bye9SIE)

[19. MVC의 모델(M) 만들기 | 객체지향프로그래밍(OOP) | UserStorage 클래스](https://www.youtube.com/watch?v=x_h2bye9SIE)

[20. User 모델 만들기 | 객체지향 프로그래밍 | 인스턴스화](https://www.youtube.com/watch?v=69JiX9rGNmI)

[21. 로그인 화면 꾸미기 | 오픈소스 사용해보기 | 코드펜(codepen)](https://www.youtube.com/watch?v=Th-HDyPCewA&t=300s)

[22. 회원가입 화면 만들기&꾸미기 | 오픈소스 사용해보기](https://www.youtube.com/watch?v=n3XUYss1jPg)

[23. 회원가입 요청 구현 in 프런트 | fetch | ajax](https://www.youtube.com/watch?v=YBRpfDsWm9k&t=307s)

[24. 회원가입 라우팅&기능구현 in 서버 | 깃 버전 관리 | tag](https://www.youtube.com/watch?v=mizgP540Zvc&t=10s)

[25. 데이터 파일로 관리하기 | fs(파일시스템) | json](https://www.youtube.com/watch?v=K0vJFEOTMeA&t=318s)

[26. 파일 DB로 로그인 구현 | promise와 async await 으로 비동기 최적화](https://www.youtube.com/watch?v=dchFLwlpI-c)

[27. 파일 DB로 회원가입 구현 | promise와 async await 으로 비동기 최적화](https://www.youtube.com/watch?v=myi7ZrKkf2o&t=119s)

[28. 서버 API 테스트 도구 | Postman | curl](https://www.youtube.com/watch?v=0veQoK9V07k)

[29. ** AWS RDS 대여 | 과금 안되도록 주의하기 | 클라우드 | MySQL](https://www.youtube.com/watch?v=PV4RNoSXQIo)

[30. ** AWS RDS 한글 설정 | 파라미터 옵션 | 클라우드 | MySQL](https://www.youtube.com/watch?v=kQUmZue6-rA)

[31. ** MySQL workbench | AWS RDS와 연동](https://www.youtube.com/watch?v=C7LK20tlQ6Y)

[32. ** 백엔드 맛보기 | AWS RDS로 DB 구축하기 | 로그인 구현 | MySQL](https://www.youtube.com/watch?v=Q4JpUm-cyQw&t=161s)

[]()

[30. 백엔드 맛보기 | 환경 변수 관리 | 보안 향상 | dotenv](https://www.youtube.com/watch?v=OEZedYK5biA)

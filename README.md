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
- node-modules 깃헙에 절대 업로드 해선 안됨! .gitingnore 사용할것!
- 반대로 package-lock.json,  package.json 파일은 반드시 깃헙에 올린다! 그래야 npm install 할때 필요한 파일이 설치된다!

[12. 폴더 구조 최적화](https://www.youtube.com/watch?v=BIjDK_xycaI)
- app/src 폴더로 구조 최적화!!

[13. 프런트를 위한 JS 만들기 | public 폴더 연결](https://www.youtube.com/watch?v=qfCJKf6YAg4&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=13)
- login.js 파일 만들고 app.js에서 미들웨어 등록! public
- `app.use(express.static(`${__dirname}/src/public`))

[14. nodemon으로 서버 띄우기 | 개발 생산성 높이기](https://www.youtube.com/watch?v=yJch-m_OCYI&t=11s)
- `npm install nodemon -g` 전역으로 설치
- `nodemon ./bin/www.js` 서버 자동으로 가동! 
```
npm start 명령어로 바꾼다! package.json에서 
"start": "nodemon ./bin/www.js"  수정!
변경된 명령어 npm start
```
[15. DOM으로 HTML 객체 제어하기 | 프런트 기능 구현](https://www.youtube.com/watch?v=yJch-m_OCYI)
- DOM: Document Objec Model >> 자바스크립트에서 html 존재하는 데이터를 제어 가능!
- `const id = document.querySelector("선택자")`
- login.js 실행시키면 id 값이 null이다. 이유는 쿼리셀렉터가 실행되기 전에 console.log(id); 가 먼저 실행 됐기 때문이다. 
- 따라서 login.ejs <script  defer 포함> defer 와 async 차이 공부할것!
```
loginButton.addEventListener("click", login);  //loginButton이 클릭되면, login 함수가 실행된다(콜백함수). 따라서 login 함수를 만들자! 
console.log(id.value); //id 입력된 값을 가져올수 있다!

const req = { 객체로 id, psword 를 저장하자! }
중요!!!! 그리고 위 객체형태로 저장된 값을 fetch를 통해서 서버에 전달한다!!!!! 
- 다음 영상에서..
```

[16. fetch | 프런트에서 서버로 데이터 보내기](https://www.youtube.com/watch?v=QRo3-00n_ew)
- fetch("경로", {전달할 데이터 객체}) 경로 설정 해야 함
- 객체 형태로 전달하게됨! 키값에 req 객체를 JSON 형태로 변환! 
- stringify 객체 데이터를 문자열로 반환
- 서버에 전달할때는 POST 방식으로 method: "POST" 아이디와 패스워드라서! 
- 서버에 전달하는 데이터는 JSON 이라는 것을 같이 알려줘야 한다! 
    - `header: {'Content-Type': "application/json"}`
- api에는 index.js 에 get 방식 뿐 아니라 POST 방식으로 데이터를 받을수 있는 api 가 있어야 한다. 다음 시간에.


[17. 로그인 API 만들기 in 서버 | 프런트의 요청데이터 파싱 | body-parser](https://www.youtube.com/watch?v=QLTcXMfcmLE&t=203s)
- home.ctrl  output and process 로 나눈다! 
- index.js 에서 get은 ouput, post 는 process 방식으로 네이밍 하면 됨! 
- app.js 에서 모듈을 설치해야함! body-parser 
    - `npm i body-parser -s`
- 그리고 미들웨어로 등록
```
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식됨!
app.use(bodyParser.urlencoded({ extended: true }));

아나~~  app.use("/", home); 위에 바디파서 미들웨어 등록 해야 됨! 하!  순서...
```

[18. 로그인 인증 기능 만들기 in 서버 | 유저 데이터 만들기](https://www.youtube.com/watch?v=lP1xx1A1vSU&t=8s)
- 서버에서 인증 하기!
- 임의의 데이터(아이디, 비번)을 작성해두고! 
- process 에서 검증 단계를 코딩한다! id가 있으면, 인덱스값 구해서 비번 인덱스 일치 하는지 코딩! 
- 리턴은 res.json 
- 그리고 login.js  fetch() 에서 서버로 데이터 보냈다면, 다시 서버에서 응답 받으려면 fecth 끝에 .then() 을 사용한다!
- `.then((res) => console.log(res.json()));`
- 그러면 promise로 데이터가 반환된다. 
```
res.json() 반환값은 promise 다.
기본 res 반환값은 response 스트림인데, .json() 메서드를 통해 response(응답) 스트림을 읽을수 있다.
response 는 데이터가 모두 받아진 상태가 아니다. 
.json() 으로 response 스트림을 가져와 완료될떄까지 읽는다. 다 읽은 body 텍스트를 promise 형태로 반환한다. 
```
- .then(res) => {} 를 통해서 로그인 성공하면 루트 페이지로, 실패하면 경고창 띄우는 코딩 다음 영상에서..

[19. 서버의 응답데이터 처리 in 프런트](https://www.youtube.com/watch?v=x_h2bye9SIE)
```
.then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);  //실패하면 ctrl에 msg 실행!
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
```

[20. MVC의 모델(M) 만들기 | 객체지향프로그래밍(OOP) | UserStorage 클래스](https://www.youtube.com/watch?v=x_h2bye9SIE)
- 데이터를 모델에 따로 저장해 둔다! userstorage.js 클래스로 만든다!
- 인스턴스화 하여 클래스에 있는 데이터를 접근 가능하게 한다! 
- 그러나, 인스턴스 하지 않고, 바로 접근 가능하게 하는 방법으로 코딩
- static 을 클래스에 사용! 정적 변수! 
- 여기서 반드시 중요! 외부에서 클래스에 있는 데이터에 접근하는 것이 불가능 해야 한다. 따라서 static #users = {}  #를 사용하여 은닉화 한다!
- 은닉화 하면 데이터를 받을수 없기 때문에 받을수 있도록 메서드 생성
```
// ...fields  그리고 reduce() 어렵다 !!!!

static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
```

[21. User 모델 만들기 | 객체지향 프로그래밍 | 인스턴스화](https://www.youtube.com/watch?v=69JiX9rGNmI)
- const user = new User(req.body);
- class USer에서 생성자 만듬.
- login() 함수를 유저 클래스에서 만들고! 
- 콘트롤 파트에서는 인스턴스화시킨 유저 객체를 로그인 함수와 연결한다! 
- 설명 힘든것은 여러워서 !!! 다시 반복 공부!! 할 강의 !!!!!!
- 반복 반복 반복 학습!!!!!


[22. 로그인 화면 꾸미기 | 오픈소스 사용해보기 | 코드펜(codepen)](https://www.youtube.com/watch?v=Th-HDyPCewA&t=300s)
- codepen 코드 사용!

[23. 회원가입 화면 만들기&꾸미기 | 오픈소스 사용해보기](https://www.youtube.com/watch?v=n3XUYss1jPg)
- 회원가입 화면 만들기

[24. 회원가입 요청 구현 in 프런트 | fetch | ajax](https://www.youtube.com/watch?v=YBRpfDsWm9k&t=307s)

[25. 회원가입 라우팅&기능구현 in 서버 | 깃 버전 관리 | tag](https://www.youtube.com/watch?v=mizgP540Zvc&t=10s)
- 회원가입 유저 정보 저장 함수 만들기 (파일 저장 아님!!!) 
- 파일 저장은 26강의!
- git log --oneline  : 로그 한줄보기
- `git tag v0.1.0-memo`  : tag 버전
- 깃 허브 태그 삭제 : `git push origin :v0.1.0-memo` : 반드시 써야 함
- 깃 로컬 태그 삭제 : `git tag -d v1.0.1-memo`

[26. 데이터 파일로 관리하기 | fs(파일시스템) | json](https://www.youtube.com/watch?v=K0vJFEOTMeA&t=318s)
- fs
- databases/users.json 
[27. 파일 DB로 로그인 구현 | promise와 async await 으로 비동기 최적화](https://www.youtube.com/watch?v=dchFLwlpI-c)
- 유저인포 은닉!
- 프로미스, 어싱크, 어웨잇

[28. 파일 DB로 회원가입 구현 | promise와 async await 으로 비동기 최적화](https://www.youtube.com/watch?v=myi7ZrKkf2o&t=119s)

[29. 서버 API 테스트 도구 | Postman | curl](https://www.youtube.com/watch?v=0veQoK9V07k)

[30. ** AWS RDS 대여 | 과금 안되도록 주의하기 | 클라우드 | MySQL](https://www.youtube.com/watch?v=PV4RNoSXQIo)
- aws rds 구현하기
- 표준생성, Mysql, 프리티어, 디비 인스턴스 식별자(고유네임):login-lecture-azimut
- aws db 접속 아이디: admin  / pw: ****!07.....
- db 인스턴스 크기 : 기본
- 스토리지 : 그대로.. 스토리지 자동 조정 활성화(비활성)
- VPC : 디폴트
- 서브넷: 데폴트
- 퍼블릭 엑세스 : 외부에서 접속 설정 가능 여부(예)
- 추가 연결구성 : 디비 포트(3306) mysql 기본포트 
- 추가 구성  (- 안됨)
    - 초기 디비 이름: login_lecture
    - 디비 생성! - 생성중 기둘려!! 5분 정도 ..
- 엔드포인트 : 내가 접속할 도메인이라 보면됨! 보안유지!
- 포트 : 3306

- 보안그룹 해야함!
[31. ** AWS RDS 한글 설정 | 파라미터 옵션 | 클라우드 | MySQL](https://www.youtube.com/watch?v=kQUmZue6-rA)
- 파라미터 그룹 :  setting
- `mysql -h login-lecture-********************.ap-northeast-2.rds.amazonaws.com -u admin -p`
- `show databases;`
```
MySQL [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| login_lecture      |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

[32. ** MySQL workbench | AWS RDS와 연동](https://www.youtube.com/watch?v=C7LK20tlQ6Y)
- mysql workbench  + 버튼 클릭
- db login_leture 사용 : `use login_lecture;`

```
use login_lecture;

CREATE TABLE users(
	id varchar(30) NOT NULL,
    name varchar(30) NOT NULL,
    psword varchar(30) NOT NULL,
    in_date datetime DEFAULT current_timestamp,
    
    PRIMARY KEY(id)
);

show tables;
desc users;

INSERT INTO users(id, name, psword)
	values("jay", "NaDaeJs", "1234"),
    ("trumph", "GaeNari", "1234"),
    ("blackpink", "DustDawn", "1234"),
    ("우리", "gaja", "1234");

SELECT  *FROM users;
```

[33. ** 백엔드 맛보기 | AWS RDS로 DB 구축하기 | 로그인 구현 | MySQL](https://www.youtube.com/watch?v=Q4JpUm-cyQw&t=161s)

[]()

[35. 백엔드 맛보기 | 환경 변수 관리 | 보안 향상 | dotenv](https://www.youtube.com/watch?v=OEZedYK5biA)

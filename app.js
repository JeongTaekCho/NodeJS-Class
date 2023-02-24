const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// 서버를 실행시킬 포트입력 후 설정
app.listen(port, () => {
  console.log(`서버가 실행 되었습니다. http://localhost:${port}`);
});

// body값을 파싱해주는거 같음.. 이부분 어렵다 이해가 안간다..
app.use(bodyParser.urlencoded({ extended: false }));

// post메소드로 값을 받은 후 유저네임을 반환시켜주는 거
app.post("/user", (req, res, next) => {
  return res.send(`<h1>User : ${req.body.userName}</h1>`);
});

// 백엔드에서 HTML태그로 폼 만들 수 있다.
app.get("/", (req, res, next) => {
  res.send(
    '<form action="/user" method="post"><input type="text" name="userName" /><button type="submit">Create</button></form>'
  );
});

app.get("/", (req, res) => {
  res.send("서버가 실행되었습니다.");
});

// 엔드포인트를 설정해서 API별로 기능설정
app.get("/login", (req, res) => {
  res.send("로그인 api환경입니다.");
});

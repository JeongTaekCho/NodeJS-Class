const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`서버가 실행 되었습니다. http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res, next) => {
  return res.send(`<h1>User : ${req.body.userName}</h1>`);
});

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/user" method="post"><input type="text" name="userName" /><button type="submit">Create</button></form>'
  );
});

// app.get("/", (req, res) => {
//   res.send("서버가 실행되었습니다.");
// });

// app.get("/login", (req, res) => {
//   res.send("로그인 api환경입니다.");
// });

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("서버가 실행되었습니다.");
});

app.get("/login", (req, res) => {
  res.send("로그인 api환경입니다.");
});

app.listen(port, () => {
  console.log(`서버가 실행 되었습니다. http://localhost:${port}`);
});

console.log(app);

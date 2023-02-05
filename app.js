const fs = require("fs");

const userName = "Taek";

fs.writeFile("test", `name : ${userName}`, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("작성 완료");
});

console.log(userName);

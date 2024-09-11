import http from "http";
import fs from "fs";

const server = http.createServer(function (req, res) {
  // const log = `${Date.now()} : ${req.method} : ${req.url} \n`;

  // fs.appendFile("./logs.txt", log, () => {
  //   console.log("Log Appended Successfully");
  // });

  switch (req.url) {
    case "/":
      res.end("Welcome to the HomePage");
      break;
    case "/about":
      res.end("This is the About Page");
      break;
    default:
      res.statusCode = 404;
      res.end("Page Not Found");
      break;
  }
});

const port = 5001;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

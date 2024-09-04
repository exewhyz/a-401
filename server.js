import fs from "fs";


// https://app.eraser.io/workspace/wIQWELI1sN4jYkrGF5DM?origin=share

setTimeout(() => {
  console.log("Hello from Timer1");
}, 0);

fs.readFile("./test.txt", "utf-8", (err, data) => {
  console.log("File Read Successful");

  setTimeout(() => console.log("hello from Timer 2"), 0);
  setTimeout(() => console.log("hello from Timer 3"), 5 * 1000);
});

setImmediate(() => {
  console.log("Hello from Immediate 1");
});

console.log("Top level Code");

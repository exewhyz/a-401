import fs from "fs";
import crypto from "crypto";

// https://app.eraser.io/workspace/wIQWELI1sN4jYkrGF5DM?origin=share

const start = Date.now();

// process.env.UV_THREADPOOL_SIZE = 6

setTimeout(() => {
  console.log("Hello from Timer1");
}, 0);

fs.readFile("./test.txt", "utf-8", (err, data) => {
  console.log("File Read Successful");

  crypto.pbkdf2("password1", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} : Password1 Completed`);
  });
  crypto.pbkdf2("password2", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} : Password2 Completed`);
  });
  crypto.pbkdf2("password3", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} : Password3 Completed`);
  });
  crypto.pbkdf2("password4", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} : Password4 Completed`);
  });
  crypto.pbkdf2("password5", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} : Password5 Completed`);
  });
  crypto.pbkdf2("password6", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} : Password6 Completed`);
  });

  // setTimeout(() => console.log("hello from Timer 2"), 0);
  // setTimeout(() => console.log("hello from Timer 3"), 5 * 1000);
  // setImmediate(() => console.log("hello from immediate 2"));
});

setImmediate(() => {
  console.log("Hello from Immediate 1");
});

console.log("Top level Code");

// https://github.com/exewhyz/a-401

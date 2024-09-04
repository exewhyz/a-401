import fs from "fs";

// fs.writeFileSync("./test.txt", "test");

// fs.writeFile("./test.txt", "Hello there!", (error) => {
//   error && console.log(error.message);
// });

// const fileData = fs.readFileSync("./test.txt", "utf-8");

// console.log(fileData);

console.log(1);

fs.readFile("./test.txt", "utf-8", (err, data) => {
  setTimeout(() => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(data);
    }
  }, 5 * 1000);
});

console.log(2);
console.log(3);
console.log(4);

const myserver = require("http");
const path = require("path");
const fs = require("fs");
myserver
  .createServer((req, res) => {
    const largeFilePath = path.join(__dirname, "book.pdf");

    let fileSync = fs.readFileSync(largeFilePath);
    // let file = fs.readFile(largeFilePath);
    // const stream = fs.createReadStream(largeFilePath).pipe(res);
    res.end(fileSync);
    // res.end(file);
  })
  .listen(8888, () => console.log("listening 8888"));

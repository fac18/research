const fs = require("fs");

const path = process.argv[2];
const readStream = fs.createReadStream(path, { highWaterMark: 59 }); // 59

readStream.on("data", chunk => {
  readStream.pause();
  process.stdout.write(chunk);

  setTimeout(() => {
    readStream.resume();
  }, 1000); // 1000
});

readStream.on("error", error => {
  console.log(error);
});

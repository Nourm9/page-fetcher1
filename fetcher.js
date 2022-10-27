const fs= require("fs")
const request = require("request");
let args = process.argv.slice(2);
let url = String(args[0]);
let path = String(args[1]);


request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(path, body, function (error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(ß
        `Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`
      );
    }
  });
  
});


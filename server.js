const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  let fileName = request.url.split("/")[1] || "index";
  console.log(fileName);

  fs.readFile(fileName + ".html", (error, data) => {
    if (error) {
      console.log(error);

      fs.readFile("not-found.html", (error, notFound) => {
        response.end(notFound);
      });

      return;
    }
    response.end(data);
  });
});

server.listen(3000, (error) => console.log);

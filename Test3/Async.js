const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>This is Home</h1>");
  } else if (req.url === "/About") {
    res.end("<h1>This is About Page</h1>");
  } else if (req.url === "/Game") {
    res.end("<h2>This is a game page.</h2>");
  } else res.end("<h1>This is Error Page</h1>");
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});

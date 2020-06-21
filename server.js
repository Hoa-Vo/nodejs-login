var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

app.listen(3000);

console.log("server is running on 127.0.0.1/3000");

app.get("/", function (req, res) {
  res.writeHead(302, { Location: "/login.html" });
  res.send();
});

app.get("/info.html", function (req, res) {
  fs.readFile("info.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.send();
  });
});

app.get("/login.html", function (req, res) {
  fs.readFile("login.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.send();
  });
});

app.get("/404.html", function (req, res) {
  fs.readFile("404.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.send();
  });
});

app.use(express.urlencoded());
app.use(express.json());

app.post("/", function (req, res) {
  var usn = req.body.username;
  var pass = req.body.password;
  console.log(usn + ":" + pass);
  if (usn == "admin" && pass == "admin") {
    res.writeHead(302, { Location: "/info.html" });
    res.send();
  } else {
    res.writeHead(302, { Location: "/404.html" });
    res.send();
  }
});

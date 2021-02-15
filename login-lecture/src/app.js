"use strict";

//모듈
const express = require("express");
const app = express();


// 라우팅 (상대경로 불러오기) 
const home = require("./routes/home");

// 앱 view 엔진 세팅 set()
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use() --> 미들웨어를 등록해주는 메서드!

module.exports = app;
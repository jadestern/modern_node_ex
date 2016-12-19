/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var express = require('express');

//서버 생성
var app = express();

//미들웨어 설정
app.use(function (req, res, next) {
    //데이터 추가
    req.number = 52;
    res.number = 273;
    next();
});

app.use(function (req, res, next) {
    //응답
    res.send('<h1>'+ req.number + ' : ' + res.number  +'</h1>')
});

app.listen(52273, function () {
    console.log("Server running at http://localhost:52273");
});
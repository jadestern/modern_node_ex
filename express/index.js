/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var express = require('express');

//서버 생성
var app = express();

app.get('/page/:id', function (req, res) {
    //변수 선언
    var name = req.params.id;

    //응답
    res.send('<h1>'+ name + ' Page</h1>')
});

app.listen(52273, function () {
    console.log("Server running at http://localhost:52273");
});
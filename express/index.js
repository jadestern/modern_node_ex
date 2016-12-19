/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var express = require('express');

//서버 생성
var app = express();
app.use('/a', require( './routerA' ).router);


app.listen(52273, function () {
    console.log("Server running at http://localhost:52273");
});
/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var express = require( 'express' );

//서버 생성
var app = express();

//request 이벤트 리스너 설정
app.use(function (req, res) {

    //응답
    res.status(404).send("<h1>ERROR</h1>");
});

app.listen(52273, function () {
   console.log( "Server running at http://localhost:52273" );
});
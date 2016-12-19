/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var express = require( 'express' );

//서버 생성
var app = express();

//미들웨어 설정
app.use(function (req, res) {
    //변수 선언
    var name = req.query.name;
    var region = req.query.region;

    //응답합니다.
    res.send('<h1>' + name + ' - ' + region + '</h1>')
});

app.listen(52273, function () {
   console.log( "Server running at http://localhost:52273" );
});
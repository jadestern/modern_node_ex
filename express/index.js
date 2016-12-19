/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var express = require( 'express' );

//서버 생성
var app = express();

//미들웨어 설정 - 1
app.use(function (req, res, next) {
   console.log( 'first' );
   next();
});

//미들웨어 설정 - 2
app.use(function (req, res, next) {
    console.log( 'second' );
    next();
});

//미들웨어 설정 - 3
app.use(function (req, res, next) {
    console.log( 'third' );

    //응답
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>express middleware</h1>');
});



app.listen(52273, function () {
   console.log( "Server running at http://localhost:52273" );
});
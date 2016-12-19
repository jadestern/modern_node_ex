/**
 * Created by koh on 2016-12-19.
 */

var express = require( 'express' );
var cookieParser = require( 'cookie-parser' );

var app = express();

app.use(cookieParser());

//라우터 설정
app.get('/getCookie', function (req, res) {
    res.send(req.cookies);
});

app.get('/setCookie', function (req, res) {
    //쿠키 생성
    res.cookie('string', 'cookie', {
        maxAge: 6000,
        secure: true
    });
    res.cookie('json', {
        name: 'cookie',
        property: 'delicious'
    });

    //응답
    res.redirect('/getCookie');

});

app.listen(52273, function () {
    console.log( 'Server running' );
});
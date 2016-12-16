/**
 * Created by koh on 2016-12-16.
 */
//모듈 추출
var fs = require('fs');
var http = require('http');

//웹서버 생성 및 실행
http.createServer(function (req, res) {
    // 변수 선언
    var date = new Date();
    date.setDate(date.getDate() + 7);

    // 쿠키를 입력
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': [
            'breakfast = toast;Expires = ' + date.toUTCString(),
            'dinner = chicken'
        ]
    });
    res.end('<h1>' + req.headers.cookie + '</h1>');
}).listen( 52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});

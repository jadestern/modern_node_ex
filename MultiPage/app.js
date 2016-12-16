/**
 * Created by koh on 2016-12-16.
 */

var http = require('http');
var fs = require( 'fs' );
var url = require( 'url' );

// 서버를 생성 및 실행
http.createServer(function (request, response) {
    var cookie = request.headers.cookie;

    //SET Cookie
    response.writeHead(200,{
        'Content-Type':'text/html',
        'Set-Cookie': [
            'name = prelasia',
            'region = Seoul'
        ]
    });

    //응답
    response.end('<h1>' + JSON.stringify(cookie) + '</h1>')

}).listen(52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});


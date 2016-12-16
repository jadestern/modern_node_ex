/**
 * Created by koh on 2016-12-16.
 */

var http = require('http');
var fs = require( 'fs' );
var url = require( 'url' );

// 서버를 생성 및 실행
http.createServer(function (request, response) {

    //쿠키가 있는지 확인
    if( request.headers.cookie ){
        var cookie = request.headers.cookie.split(';').map(function (element) {
            var element = element.split('=');
            return {
                key: element[0],
                value: element[1]
            }
        });

        //응답
        response.end('<h1>'+ JSON.stringify(cookie) +'</h1>')
    } else {
        //쿠키 생성
        response.writeHead(200,{
            'Content-Type':'text/html',
            'Set-Cookie': [
                'name = prelasia',
                'region = Seoul'
            ]
        });
        //응답
        response.end('<h1>쿠키를 생성했다</h1>')
    }
}).listen(52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});


/**
 * Created by koh on 2016-12-16.
 */

var http = require('http');
var fs = require( 'fs' );
var url = require( 'url' );

// 서버를 생성 및 실행
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    //페이지를 구분
    if( request.method == 'GET' ){
        console.log('GET 요청')
    } else if( request.method == 'POST' ){
        console.log( 'POST요청' );
    }

}).listen(52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});


/**
 * Created by koh on 2016-12-16.
 */

var http = require('http');
var fs = require( 'fs' );
var url = require( 'url' );

// 서버를 생성 및 실행
http.createServer(function (request, response) {
    //요청 매개변수를 추출
    var query = url.parse(request.url, true).query;

    //GET 요청 매개변수 출력
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>'+ JSON.stringify(query) +'</h1>')

}).listen(52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});


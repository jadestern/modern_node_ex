/**
 * Created by koh on 2016-12-16.
 */

var http = require('http');
var fs = require( 'fs' );
var url = require( 'url' );

// 서버를 생성 및 실행
http.createServer(function (request, response) {
    if( request.method == 'GET' ){
        fs.readFile('index.html', function (error, data) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        })
    } else if( request.method == 'POST' ){
        request.on('data', function (data) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end('<h1>'+ data +'</h1>');
        });
    }

}).listen(52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});


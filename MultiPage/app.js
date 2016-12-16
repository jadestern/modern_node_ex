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
    if( pathname == '/' ){
        fs.readFile('Index.html', function (error, data) {
           response.writeHead(200, {'Content-Type':'text/html'});
           response.end(data);
        });
    } else if( pathname == '/OtherPage' ){
        fs.readFile('OtherPage.html', function (error, data) {
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        })
    }

}).listen(52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});


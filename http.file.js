/**
 * Created by koh on 2016-12-16.
 */
//모듈 추출
var fs = require('fs');
var http = require('http');

//웹서버 생성 및 실행
http.createServer(function (req, res) {
    //HTML 파일 읽기
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data);
    })
}).listen( 52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});

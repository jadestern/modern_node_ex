/**
 * Created by koh on 2016-12-16.
 */
//모듈 추출
var fs = require('fs');
var http = require('http');

//웹서버 생성 및 실행
http.createServer(function (req, res) {

    res.writeHead(302, {
        'Location': 'http://www.hanbit.co.kr'
    });
    res.end();
}).listen( 52273, function () {
    console.log( 'Server Running at http://localhost:52273' );
});

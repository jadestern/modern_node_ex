/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var http = require( 'http' );
var express = require( 'express' );

//서버 생성
var app = express();

http.createServer(app).listen(52273, function () {
    console.log( "Server Running at http://127.0.0.1:52273" );
});
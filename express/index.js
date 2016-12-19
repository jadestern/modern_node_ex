/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var express = require( 'express' );

//서버 생성
var app = express();

//미들웨어 설정
app.use(function (req, res) {
    //User-Agent 속성 추출
    var agent = req.header('User-Agent');

    //브라우저 구분
    if( agent.toLowerCase().match(/chrome/) ){
        //페이지 출력
        res.send('<h1>Hello Chrome!</h1>')
    } else {
        res.send('<h1>Hello express!</h1>')
    }
});

app.listen(52273, function () {
   console.log( "Server running at http://localhost:52273" );
});
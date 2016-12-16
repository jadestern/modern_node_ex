//서버 생성
var server = require('http').createServer();

//웹 서버 실행
server.listen(52273, function () {
    console.log( 'Server Runiing at http://localhost:52273' );
});

//10초 후에 함수를 실행
var test = function () {
    //서버를 종료
    server.close();
};
setTimeout(test, 5000);
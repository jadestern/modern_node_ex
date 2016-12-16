//서버 생성
var server = require('http').createServer();

//server 객체에 이벤트 연결
server.on('request', function (code) {
    console.log( 'Request On' );
});

server.on('connection', function (code) {
    console.log( 'Connection On' );
});

server.on('close', function (code) {
    console.log( 'Close On' );
});

server.listen(52273);
/**
 * Created by koh on 2016-12-16.
 */

//process 객체에 EXIT 이벤트를 연결
process.on('exit', function (code) {
    console.log( '안녕히 가세욤' );
});

var onUncaughtException = function (error) {
    console.log( '예외 발생!' );

    process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

//2초 간격으로 예외 발생
var test = function () {
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout( test, 2000);
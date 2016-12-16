/**
 * Created by koh on 2016-12-16.
 */

//process 객체에 EXIT 이벤트를 연결
process.on('exit', function (code) {
    console.log( '안녕히 가세욤' );
});


process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log( '프로그램 실행중' );
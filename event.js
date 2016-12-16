/**
 * Created by koh on 2016-12-16.
 */

//EventEmitter 객체를 생성
var custom = new process.EventEmitter();

custom.on('tick', function (code) {
    console.log( '이벤트를 실행' );
});

custom.emit('tick');
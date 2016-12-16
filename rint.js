/**
 * Created by koh on 2016-12-16.
 */

//EventEmitter 객체 생성
exports.timer = new process.EventEmitter();

//이벤트를 강제로 발생
setInterval(function () {
    exports.timer.emit('tick');
}, 1000);
/**
 * Created by koh on 2016-12-16.
 */

//모듈을 추출
var rint = require('./rint');

//이벤트를 연결
rint.timer.on('tick', function (code) {
    console.log( '이벤트 실행합니당' );
});
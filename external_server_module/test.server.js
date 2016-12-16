/**
 * Created by koh on 2016-12-16.
 */

var http = require( 'http' );

http.createServer(function (req, res) {
    if( req.url == '/' ){
        res.write("<h2>h2닷!!!</h2>");
        res.end();
    } else {
       //오류 발생!
        error.error.error();
    }
}).listen(52273, function () {
    console.log( 'Server Running at localhost:52273' );
});
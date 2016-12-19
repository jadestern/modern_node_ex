/**
 * Created by koh on 2016-12-19.
 */
var express = require( 'express' );
var app = express();

//미들웨어 설정
app.use(express.static(__dirname + '/public'));
app.use(function (req, res) {
   //응답
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<img src="/1.jpg" width="100%" />');
});

app.listen(52273, function () {
    console.log("Server running at http://localhost:52273");
});
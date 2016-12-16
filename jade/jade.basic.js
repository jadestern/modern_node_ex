/**
 * Created by koh on 2016-12-16.
 */

var http = require( 'http' );
var fs = require( 'fs' );
var jade = require( 'jade' );

http.createServer(function (req, res) {
    fs.readFile('JadePage.jade', 'utf8', function (error, data) {
        var fn = jade.compile(data);

        //출력
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(fn({
            name: "prelasia",
            description: "Hello Jade With Node.js"
        }));
    });
}).listen(52273, function () {
    console.log( 'Server Running at localhost:52273' );
});
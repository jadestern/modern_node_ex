/**
 * Created by koh on 2016-12-15.
 */
var http = require('http');
http.createServer(function (request, response) {
   response.writeHead(200, { 'Content-Type': 'text/html'});
   response.end('<h1>Hello World...!</h1>');

}).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273/');
    console.time('alpha');

    var output = 1;
    for( var i = 1 ; i <= 10 ; i++ ){
        output *= i;
    }
    console.log('Result:', output);

    console.timeEnd('alpha');
});


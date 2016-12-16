/**
 * Created by koh on 2016-12-15.
 */

var fs = require('fs');

//파일 읽기
fs.readFile('textfile.txt', 'utf8', function (error, data) {
    if( error ){
        console.log(error);
    } else {
       console.log(data);
    }
});

//파일 쓰기
fs.writeFile('textfile.txt', 'Hello World', 'utf8', function ( error ) {
    if( error ){
       console.log( error );
    } else {
       console.log( 'File WRITE COMPLETE' );
    }
});


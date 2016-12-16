/**
 * Created by koh on 2016-12-15.
 */

var fs = require('fs');

//파일 읽기
try {
    var data = fs.readFileSync('textfile.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

//파일 쓰기
try {
    fs.writeFileSync('textfile.txt', 'Hello World', 'utf8');
    console.log('FILE WRITE COMPLETE');
} catch (e) {
    console.log(e);
}



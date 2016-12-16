/**
 * Created by koh on 2016-12-15.
 */

var fs = require('fs');

fs.readFile('textfile.txt', 'utf8', function (error, data) {
   console.log(data);
});

var data = 'Hello World!';

//모듈 사용
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (err) {
   console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');
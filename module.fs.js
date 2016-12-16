/**
 * Created by koh on 2016-12-15.
 */

var fs = require('fs');

fs.readFile('textfile.txt', 'utf8', function (error, data) {
   console.log(data);
});
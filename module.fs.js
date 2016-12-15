/**
 * Created by koh on 2016-12-15.
 */

var fs = require('fs');

var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);
/**
 * Created by koh on 2016-12-15.
 */

var url = require('url');

var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B3759307730');

console.log(parsedObject);
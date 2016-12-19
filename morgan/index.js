/**
 * Created by koh on 2016-12-19.
 */

var express = require( 'express' );
var morgan = require( 'morgan' );

var app = express();

app.use(morgan(':method + :date'));
app.use(function (req, res) {
    res.send('<h1>Express Basic</h1>');

});

app.listen(52273, function () {
    console.log("Server running at http://localhost:52273");
});
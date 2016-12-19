/**
 * Created by koh on 2016-12-19.
 */

//모듈 추출
var express = require( 'express' );
var session = require( 'express-session' );

var app = express();

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}));

app.use(function (req, res) {
    //세션 저장
    req.session.now = (new Date()).toUTCString();

    //응답
    res.send(req.session);
});

app.listen(52273, function () {
    console.log( 'Server Running!!!' );
});


/**
 * Created by koh on 2016-12-19.
 */

//모듈과 변수 선언
var express = require( 'express' );
var router = express.Router();

//페이지 라우트
router.get('/index', function (req, res) {
    res.send('<h1>Index Page</h1>');
});

//외부로 빼기
exports.router = router;

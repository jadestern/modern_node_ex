/**
 * Created by koh on 2016-12-19.
 */

var fs = require( 'fs' );
var express = require( 'express' );
var multipart = require( 'connect-multiparty' );

//서버 생성
var app = express();

//미들웨어 설정
app.use(multipart({ uploadDir: __dirname + '/multipart'}));

//라우터 설정
app.get('/', function (req, res) {
    fs.readFile('index.html', function (error, data) {
        res.send(data.toString());
    });
});

app.post('/', function (req, res) {
    //변수 선언
    var comment = req.body.comment;
    var imageFile = req.files.image;

    if( imageFile ){
        //변수 선언
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        //이미지 파일 확인
        if( type.indexOf('image') != -1 ){
            console.log( "여기 왓따. 이미지 확인" );
            //이미지 파일의 경우 : 파일 이름을 변경합니다.
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function (error) {
                console.log( "rename 안" );
                res.redirect('/');
                console.log( "리다이렉트 후" );
            });
        } else {
            //이미지 파일이 아닌 경우, 파일을 제거
            fs.unlink(path, function (error) {
                res.sendStatus(400);
            })
        }
    } else {
       //파일이 없는경우
        res.sendStatus(404);
    }
});

//서버 실행
app.listen(52273, function () {
    console.log( 'Server running' );
});
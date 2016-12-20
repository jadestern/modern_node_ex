/**
 * Created by koh on 2016-12-19.
 */

var fs = require( 'fs' );
var express = require( 'express' );
var bodyParser = require( 'body-parser' );

//더미 데이터베이스 구현
var DummyDB = (function () {
    //변수
    var DummyDB = {};
    var storage = [];
    var count = 1;

    //메서드 구현
    DummyDB.get = function (id) {
        if( id ){
            // 변수 가공
            id = (typeof id == 'string') ? Number(id) : id;

            //데이터를 선택
            for (var i in storage) if ( storage[i].id == id){
                return storage[i];
            }
        } else {
           return storage;
        }
    };

    DummyDB.insert = function (data) {
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function (id) {
        //변수 가공
        id = (typeof id == 'string') ? Number(id) : id;

        //제거
        for ( var i in storage) if (storage[i].id == id) {
            //데이터 제거
            storage.splice(i, 1);

            //리턴 : 데이터 삭제 성공
            return true;
        }
        //리턴: 데이터 삭제 실패
        return false;
    };
    return DummyDB;
})();

//서버 생성
var app = express();

//미들웨어 설정
app.use(bodyParser.urlencoded({
    extended: false
}));

//라우터 설정
app.get('/user', function (req, res) {
    res.send(DummyDB.get());
});
app.get('/user/:id', function (req, res) {
    res.send(DummyDB.get(req.params.id));
});
app.post('/user', function (req, res) {
    //변수 선언
    var name = req.body.name;
    var region = req.body.region;

    //유효성 검사
    if( name && region ){
        res.send(DummyDB.insert({
            name: name,
            region: region
        }));
    } else {
       throw new Error('error');
    }
});
app.put('/user/:id', function (req, res) {
    //변수 선언
    var id = req.params.id;
    var name = req.body.name;
    var region = req.body.region;

    //데이터 베이스 수정
    var item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    //응답
    res.send(item);
});
app.delete('/user/:id', function (req, res) {
    res.send(DummyDB.remove(req.params.id));
});

app.listen(52273, function () {
    console.log( "Server Running!!" );
});
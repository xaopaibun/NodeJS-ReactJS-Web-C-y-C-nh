var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('express-session')
var cors = require('cors')
/* GET home page. */
var con = mysql.createConnection({
  host: "localhost",
  user     : 'root',
  password : '',
  database : 'dbcaycanh'
});
con.connect();
router.get('/getdata', function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
    con.query("SELECT * FROM caycanh", function (err, result, fields) {
      if (err) throw err;
      res.send(result);
    });
});
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.post('/add',cors(),  function(req, res, next) {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);
   let id = req.body.id;
    let ten = req.body.name;
    let img = req.body.img;
    let Gia = req.body.Gia;
    con.query("INSERT INTO caycanh VALUES ("+id+",'"+ ten+"', '"+img+"', "+Gia+")", (err, result)  => {
      if (err)   res.send('Thêm Lỗi rồi', err);
      res.send('Thêm Thành công');
    });
});

router.delete('/delete', cors(),  function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  let id = req.body.id;
   con.query("DELETE FROM `caycanh` WHERE `caycanh`.`id` = "+id+"", (err, result)  => {
     if (err)   res.send('Xóa Lỗi rồi', err);
     res.send('Xóa dữ liệu Thành công');
   });
});




router.get('/send', function(req, res, next) {
   
    res.send('heheh');
});
router.get('/lay', function(req, res, next) {
  
  res.send(req.session.quy);

});

module.exports = router;

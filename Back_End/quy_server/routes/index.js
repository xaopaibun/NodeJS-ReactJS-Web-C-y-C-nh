var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('express-session')
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
router.post('/addcay', function(req, res, next) {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);
    let ten = req.body.ten;
    let img = req.body.img;
    let gia = req.body.gia;
    con.query("INSERT INTO caycanh VALUES (NULL,'"+ ten+"', '"+img+"', "+gia+")", (err, result)  => {
      if (err)   res.send('Thêm Lỗi rồi', err);
      res.send('Thêm Thành công');
    });
});
router.get('/send', function(req, res, next) {
   
    res.send('heheh');
});
router.get('/lay', function(req, res, next) {
  
  res.send(req.session.quy);

});

module.exports = router;

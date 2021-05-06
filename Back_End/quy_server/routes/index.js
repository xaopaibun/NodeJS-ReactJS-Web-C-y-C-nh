var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('express-session')
var cors = require('cors')
var multer  = require('multer')
const nodemailer =  require('nodemailer');
var md5 = require('md5');
 
/* GET home page. */
var con = mysql.createConnection({
  host: "localhost",
  user     : 'root',
  password : '',
  database : 'dbcaycanh'
});
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.originalname + '-' + uniqueSuffix)
//   }
// })


// var upload = multer({ storage: storage })
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
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
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

router.post('/delete', cors(),  function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  let id = req.body.id;
  console.log(id);
   con.query("DELETE FROM `caycanh` WHERE `caycanh`.`id` = "+id+"", (err, result)  => {
     if (err)   res.send('Xóa Lỗi rồi', err);
     res.send('Xóa dữ liệu Thành công');
   });
});
router.put('/put', cors(),  function(req, res, next) {
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
   con.query("UPDATE `caycanh` SET `name` = '"+ten +"', `img` = '"+img+"', `Gia` = '"+Gia+"' WHERE `caycanh`.`id` = "+id+"", (err, result)  => {
     if (err)   res.send('Sửa Lỗi rồi', err);
     res.send('Sửa dữ liệu Thành công');
   });
});





router.get('/send', function(req, res, next) {
   
    res.send('heheh');
});
router.get('/lay', function(req, res, next) {
  
  res.send(req.session.quy);

});
router.post('/send-mail', function(req, res) {

  var transporter =  nodemailer.createTransport({ 
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: 'vanquy33338888@gmail.com',
          pass: '01652343938'
      },
      tls: {
         
          rejectUnauthorized: false
      }
  });

  var mainOptions = { 
      from: 'Phạm Jin',
      to: req.body.mail,
      subject: 'Test Thôi',
      text: 'Đại học điẹn lực',
    
  }
  transporter.sendMail(mainOptions, function(err, info){
      if (err) {
          console.log(err);
          req.flash('mess', 'Lỗi gửi mail: '+err); 
          res.redirect('/');
      } else {
          console.log('Message sent: ' +  info.response);
          req.flash('mess', 'Một email đã được gửi đến tài khoản của bạn'); 
          res.redirect('/');
      }
  });
});

router.post('/dangky',cors(),  function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);  
   let gmail = req.body.gmail;
   let sdt = req.body.sdt;
   let pass = md5(req.body.pass);
   con.query("INSERT INTO `user` (`gmail`, `sdt`, `matkhau`) VALUES ('"+gmail+"', '"+ sdt+"', '"+ pass+"')", (err, result)  => {
     if (err)   res.send('lỗi', err);
     res.send(result);
   });
});

module.exports = router;

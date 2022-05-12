var express = require('express');
var router  = express.Router();

//store the express in a variable
var app = express();

router.get('/', function(req, res,next) {
    res.render('index',{title:'Express'});
});

var mysql = require('mysql');
var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  passsword:'password',
  database:'demo',
  debug: false
}); 

router.get('/testconnect', function(req,res) {
  if (db != null) {
   res.send('connect sucess') 
 }
});

//module.exports = router;

//This piece of code creates the server
//and listens to the request at port 8888
//we are also generating a message once the
//server is created
var server = app.listen(8888, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log("Example app listening at http://%s:%s", host, port);
 });

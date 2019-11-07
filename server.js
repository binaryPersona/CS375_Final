var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');

//var request = require("request");

var app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/login', function (req, res){
      email = req.body.email;
      password = req.body.password;
      console.log("Got a login request email:  " + email + ' password: ' + password);
      res.end();
});

app.listen(8080, function(){
      console.log('Server Running');
});
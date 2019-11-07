var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');

//var request = require("request");

var app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//pulls up the login html from the folder and passes it back to the browser
app.get("/loadLoginPage", function(req,res) {
	var loginHtml = fs.readFileSync('./HTMLpages/login.html');
    res.send(loginHtml);
});

//checks if the email/password pair is in the DB
app.post('/login', function (req, res){
	email = req.body.email;
    password = req.body.password;
    console.log("Got a login request email:  " + email + ' password: ' + password);

  	//FIXME: add a condition for testing if the email/password pair is in the DB
  	response={
  		succses:true,
  	};
  	res.send(response); 	
});

//pulls up the tasks html page from the folder and passes it back to the browser
app.get("/loadTasksPage", function(req,res){
	var tasksHtml = fs.readFileSync('./HTMLpages/tasks.html');
        res.send(tasksHtml);
});

app.listen(8080, function(){
      console.log('Server Running');
});
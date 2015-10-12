var http = require('http');
var express = require('express');
var path = require('path');
app = express();

app.use('/GAME',function(req,res){
       res.sendFile(__dirname + '/final.html');
})



app.use('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
})

http.createServer(app).listen(3000);
console.log("server running on port 3000");

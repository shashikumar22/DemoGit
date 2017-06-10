var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname);



app.get("/demo",function(req,res){
	console.log("demo");	
});


app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });
app.listen(8000);
console.log("Listening on 8000");
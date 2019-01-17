var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

//route for index page
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

//route for about page
router.get('/list', function(req,res){
    res.sendFile(path.join(__dirname+'/list.html'));
});

//route for contact page
router.get('/about', function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

//sets up server
app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Running on port 3000");
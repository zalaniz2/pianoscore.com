// server.js
var express = require('express');
var expLayouts = require('express-ejs-layouts'); 
var app = express();
var port = 8080;

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expLayouts); //once main sections are in place


var main_router = require('./app/routes/main_routes');
app.use("/" , main_router);

app.use(express.static(__dirname + '/public'));


// start the server
app.listen(port, function() {
 console.log('PianoScore.com started on port: ' + port);
});

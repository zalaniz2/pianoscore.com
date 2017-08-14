var express = require("express");
var path = require("path");


//creat router object
main_router = express.Router();

//export main_router
module.exports = main_router;

main_router.get("/", function(req, res){

  res.render('pages/index');

})

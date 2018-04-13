/***********************************
 * Module dependencies. 
 ************************************/
var express = require('express');
var Logger = require('./lib/logger');
var dotenv = require('dotenv');

/***********************************
 * App creation
 ************************************/
dotenv.config();
var app = express();

/***********************************
 * Set up app properties & engine
 ************************************/
app.use(Logger.getRequestLogger());

/***********************************
 * Controllers
 ************************************/
var doorController = require('./controllers/door');

app.get('/', doorController.index);
app.get('/open', doorController.open);
app.get('/close', doorController.close);

/***********************************
 * Start server
 ************************************/
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})

/***********************************
 * Module exports.
 ************************************/
module.exports = app;

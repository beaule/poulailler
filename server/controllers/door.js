/***********************************
 * door controller to close and open the door
 ************************************/

/***********************************
 * Module dependencies.
 * @private
 ************************************/
var PythonShell = require("python-shell");

/***********************************
 * Private functions
 ************************************/

/***********************************
 * rendering functions
 ************************************/

/**
 * render landing page (home screen)
 *
 * @param {req} request
 * @param {res} response
 */
function renderIndex(req,res){
  res.render('home', {
    title: 'Welcome',       
    layout: 'landing-page'
  });  
}

/**
 * trigger open the door
 *
 * @param {req} request
 * @param {res} response
 */
function renderOpen(req,res){
  PythonShell.run("./opendoor.py", function (err, data) {
    if (err) res.send(err);
    res.send(data.toString())
  });
}

/**
 * trigger open the door
 *
 * @param {req} request
 * @param {res} response
 */
function renderClose(req,res){
  PythonShell.run("./closedoor.py", function (err, data) {
    if (err) res.send(err);
    res.send(data.toString())
  });
}


/***********************************
 * Module exports.
 ************************************/
module.exports={
    index :function(req, res) {
      renderIndex(req,res);
    },
    open :function(req, res) {
      renderOpen(req,res);
    },
    close :function(req, res) {
      renderClose(req,res);
    }
};
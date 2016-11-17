// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs'); //file search - give our node app tools to walk through folders and directories and read files directly. Disconnected from require completely
// require path for getting the models path
var path = require('path');
// connect to mongoose!
mongoose.connect('mongodb://localhost/animals');
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) { //if the file is a .js file, want to look at it
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file); //require just runs whatever code is in that file
  }
});

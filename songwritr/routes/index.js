
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.chord = function(req,res){
  var imageUrl = "/public/images/";

  imageUrl += req.param('chord'); //get the image name

  res.json({"image":imageUrl}); //send the image to the server
};

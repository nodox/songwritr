/*All the animation javascript functions*/
var stage;
var text;
var oldArr;

function initCreate(){
  stage = stage = new createjs.Stage("canv");
}

function makeText(){
  stage.removeAllChildren();
  stage.update();

  text = document.getElementById("tArea");
  var initialX = 0,initialY = 0;
  var lyrics = text.value.split("\n"); //makes an array from the lines
  var lines = [text.length]; //array of labels for the array
  var coordinates = [text.length]; //stores the coordinates when the canvas is redrawn

  for(i=0; i < lyrics.length; i++){

      var label =  new createjs.Text(lyrics[i],"bold 15px Helvetica","#000000");
      label.textAlign = "left";
      label.y = 0;
      label.x = 0;
      /*var coor = {x : initialX, y: initialY}; //makes an object with the coordinates */
      var drag = new createjs.Container();
      drag.x = 30;
      drag.y = initialY;
      initialY += 50;
    /*  coordinates[i] = coor; //store the coordinates*/
      drag.addChild(label);


			drag.on("pressmove",function(evt) {
				evt.currentTarget.x = evt.stageX;
				evt.currentTarget.y = evt.stageY;
				stage.update();
			});
      lines[i] = drag;
      stage.addChild(lines[i]);
  }

  stage.update();

}

function makeChords(imgUrl){
  var offset; // make an image of a specified chord
  var img = new Image();
  img.src = imgUrl;

  var bitmap = new createjs.Bitmap(img); //create new image from bitmap
  bitmap.x = 0;
  bitmap.y = 0;
  bitmap.cursor = "pointer"; //makes it so the cursor doesn't change

  var dragImg = new createjs.Container(); //add to draggable container
  dragImg.x = 10;
  dragImg.y = 10;


  bitmap.on("pressmove",function(evt) {
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
    stage.update();
  });

  dragImg.addChild(bitmap);

  stage.addChild(dragImg);
  stage.update();
}

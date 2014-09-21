var stage;

var text;
var oldArr;

function makeText(){
  text = document.getElementById("tArea");
  stage = stage = new createjs.Stage("canv");
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
      var initialY = initialY+50;
    /*  coordinates[i] = coor; //store the coordinates*/
      drag.addChild(label);


			drag.on("pressmove",function(evt) {
				// currentTarget will be the container that the event listener was added to:
				evt.currentTarget.x = evt.stageX;
				evt.currentTarget.y = evt.stageY;
        //coordinates[i].x = evt.stageX;
        //coordinates[i].y = evt.stageY;
				// make sure to redraw the stage to show the change:
				stage.update();
			});
      lines[i] = drag;
      stage.addChild(lines[i]);
  }

  stage.update();

}

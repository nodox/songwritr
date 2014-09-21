var stage;

var text;
var oldArr;

function initCreate(){
  stage = stage = new createjs.Stage("canv");
}

function makeText(distanceBetweenLines){
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
      var initialY = initialY+50;
    /*  coordinates[i] = coor; //store the coordinates*/
      drag.addChild(label);


			drag.on("pressmove",function(evt) {
				if(distanceBetweenLines === undefined){
					evt.currentTarget.x = evt.stageX;
					evt.currentTarget.y = evt.stageY;	
				}
				// currentTarget will be the container that the event listener was added to:
				//snap to grid
				evt.currentTarget.x = floor(evt.stageX/distanceBetweenLines)*distanceBetweenLines;
				evt.currentTarget.y = floor(evt.stageY/distanceBetweenLines)*distanceBetweenLines;
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

function makeChords(imgUrl){ // make an image of a specified chord
  var bitmap = new createjs.Bitmap(imgUrl);

  var drag = new createjs.Container();
  drag.x = 10;
  drag.y = 10;

  drag.addChild(bitmap);
  stage.addChild(drag);
  stage.update();
}

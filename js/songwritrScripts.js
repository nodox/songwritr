
function generateGrid(canvas, bpm, grouping, color) {

            var canvas = document.getElementById('myCanvas');

            var context = canvas.getContext('2d');

            var bpm = 140;

            var grouping = 3;

            var distanceBetweenLines = (1 / bpm) * 4000;

            for (i = 1; i * distanceBetweenLines < canvas.width; i++) {

                context.beginPath();

                context.lineWidth = 0.25;
                context.moveTo(i * distanceBetweenLines, 0);

                context.lineTo(i * distanceBetweenLines, canvas.height);

                context.strokeStyle = color || '#7700ff';

                context.stroke();

            }

            for (i = 1; i * distanceBetweenLines < canvas.width; i += grouping) {

                context.beginPath();

                context.lineWidth = 0.75;

                context.moveTo(i * distanceBetweenLines, 0);

                context.lineTo(i * distanceBetweenLines, canvas.height);
	
       	        context.strokeStyle = color || '#7700ff';

                context.stroke();

            }

            for (i = 1; i * 50 < canvas.height; i++) {

                context.beginPath();

                context.lineWidth = 0.25;

                context.moveTo(0, i * 50);

                context.lineTo(canvas.width, i * 50);

                context.strokeStyle = color || '#7700ff';

                context.stroke();

            }

        return distanceBetweenLines;

        }
function enableDrawing(canvas, drawButton, color) {

            //canvas is canvas object, drawbutton is an html button which toggles drawing, color is a hex string
            context = canvas.getContext("2d");

            var draw = false;

            var paint = false;

            $(drawButton).mousedown(function() {

                draw = !draw;

            });

            $(canvas).mousedown(function(e) {

                paint = true;

                if (draw & paint) {

                    var mouseX = e.pageX - this.offsetLeft;

                    var mouseY = e.pageY - this.offsetTop;

                    addClick(mouseX, mouseY);

                    redraw();

                }

            });

            $(canvas).mousemove(function(e) {

                if (draw & paint) {

                    var mouseX = e.pageX - this.offsetLeft;

                    var mouseY = e.pageY - this.offsetTop;

                    addClick(mouseX, mouseY, true);

                    redraw();

                }

            });

            $(canvas).mouseup(function(e) {

                paint = false;

                redraw();

            });

            $(canvas).mouseleave(function(e) {

                paint = false;

            });

            var clickX = new Array();

            var clickY = new Array();

            var clickDrag = new Array();


            function addClick(x, y, dragging) {

                clickX.push(x);

                clickY.push(y);

                clickDrag.push(dragging);

            }


            function redraw() {


               

 context.strokeStyle = color || "#000000";

                context.lineJoin = "round";

                context.lineWidth = 1;



                for (var i = 0; i < clickX.length; i++) {

                    context.beginPath();

                    if (clickDrag[i] && i) {

                        context.moveTo(clickX[i - 1], clickY[i - 1]);

                    } else {

                        context.moveTo(clickX[i] - 1, clickY[i]);

                    }

                    context.lineTo(clickX[i], clickY[i]);

                    context.closePath();

                    context.stroke();

                }

            }
        }
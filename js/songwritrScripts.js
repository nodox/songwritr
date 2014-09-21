function generateGrid(canvas, bpm, grouping) {

            var canvas = document.getElementById('myCanvas');

            var context = canvas.getContext('2d');

            var bpm = 140;

            var grouping = 3;

            var distanceBetweenLines = (1 / bpm) * 4000;

            for (i = 1; i * distanceBetweenLines < canvas.width; i++) {

                context.beginPath();

                context.moveTo(i * distanceBetweenLines, 0);

                context.lineTo(i * distanceBetweenLines, canvas.height);

                context.strokeStyle = '#7700ff';

                context.stroke();

            }

            for (i = 1; i * distanceBetweenLines < canvas.width; i += grouping) {

                context.beginPath();

                context.lineWidth = 2;

                context.moveTo(i * distanceBetweenLines, 0);

                context.lineTo(i * distanceBetweenLines, canvas.height);

                context.strokeStyle = '#7700ff';

                context.stroke();

            }

            for (i = 1; i * 50 < canvas.height; i++) {

                context.beginPath();

                context.lineWidth = 0.5;

                context.moveTo(0, i * 50);

                context.lineTo(canvas.width, i * 50);

                context.strokeStyle = '#7700ff';

                context.stroke();

            }

        return distanceBetweenLines;


        }
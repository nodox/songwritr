$(function() {

	init();
	$( window ).resize( init );

	$( '#toCustom' ).click( toCustom );
	$( '#exitCustom' ).click( exitCustom );
	$( '#submitCustom' ).click( imgChanger );
	$( '#saveAs' ).click( saveImage );

	$( '.sidebar ul li' ).click( function() {
		var $t = $( this );

		if ( $t.hasClass( 'active' ) ) {
			$t.removeClass( 'active' );
		} else {
			$t.siblings().removeClass( 'active' );
			$t.addClass( 'active' );
			if ( $t.parent().parent().hasClass( 'quickadd' ) )
				quickChord( $t );
		}
	});

});

function init() {
	var width = $( window ).width();
	var height = $( window ).height();

	$( '#canv' ).attr({
		'width' : width - 610,
		'height' : height - 83
	});
}

function toCustom() {
	$( '.custom' ).css( 'left' , "0%" );
}
function exitCustom() {
	$( '.custom' ).css( 'left' , "100%" );
}

/*public*/ function imgChanger() {
	var path = findImg();
	$( '#currentChord img' ).attr( 'src', path );
	exitCustom();
	$( '.sidebar ul li' ).removeClass( 'active' );

	//insert on canvas
	makeChords( path );
}

function notImg( url ) {
	var img;
    img = new ActiveXObject( 'Scripting.FileSystemObject' );
    return img.FileExists( url );
}

function findImg() {
	var imgPath = "img/";
	$( '.custom' ).find( '.active' ).each( function() {
		imgPath += $( this ).attr( 'value' );
	});
	imgPath += ".jpg";

	return imgPath;
}

function quickChord( $t ) {
	var path = "img/";
	path += $t.attr( 'value' );
	path += ".jpg";

	$( '#currentChord img' ).attr( 'src', path );
	makeChords( path );

	return path;
}

<<<<<<< HEAD
// added and fucked up by steven from here down will break!!!
function findChord(string) {

	var chords = "";
	var temps = [];

	for (i = 0; i < string.length; i++) {
		if (string[i] == "%") {
			temps.push(i);
		}
	chords = string.substring(temps[i], temps[i])



	}
	
function findChord(arr) {

  //var string = "ABCD%nEFGHI%nJKLM%nNO";
  var arr ["you a%re my friend", "you are % my fr%niend"]
	var chords = "";
	var temps = arr.split("%");

	// for (j = 0; j < arr.length; j++) {  // for each index that has an string
		// for (i = 0; i < arr[i].length; i++) { // for each string length
			// if (arr[i] === "%") {
				// temps.push(chords);
				// chords = ""
			// }
			// console.log(chords);
		// }
	// }
// }

  
  var string = "ABCD%nEFGHI%nJKLM%nNO";
	var chords = "";
	var temps = [];

	for (i = 0; i < string.length; i++) {
		chords += string[i];
		if (string[i] === "%") {
			chords.splice(i,i+1);	
		}
	    alert(chords);

	}
=======
function saveImage(){
	var canv = document.getElementById("canv");

	Canvas2Image.saveAsPNG(canv);
}
>>>>>>> 586eb501c943c55645d08b077a6216bccf18c7f4

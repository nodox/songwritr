$(function() {

	init();
	$( window ).resize( init );

	$( '#toCustom' ).click( toCustom );
	$( '#exitCustom' ).click( exitCustom );
	$( '#submitCustom' ).click( imgChanger );
	$( '#saveAs' ).click( saveImage );

	$( '#addButton ').click( addNote );
	$( '#submit' ).click( createSong );

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

function addNote() {
	var text = $( 'textarea' ).text();
	var note = $( '.quickadd .active' ).attr('value');
	if ( note ) {
		$( 'textarea' ).text( text + note );
		$( 'textarea' ).keyup();
		$( '.quickadd .active' ).removeClass( 'active' );
	}
}

function createSong() {
	var title = "T: " + $( '#songTitle' ).text();
	var measure = "M: " + $( '#measure' ).text();
	var subtitle = "R: " + $( '#subtitle' ).text();
	var key = "K: " + $( '#key' ).text();

	var text = "X: 1\n" + title + measure + "L: 1/8" + subtitle + key + "|:";

	$( '#createSong' ).css({
		'top' : "-100%",
		'opacity' : '0'
	});
	$( 'textarea' ).text( text );
	$( 'textarea' ).keyup();

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

function saveImage(){
	var canv = document.getElementById("canv");

	Canvas2Image.saveAsPNG(canv);
}


// added and fucked up by steven from here down will break!!!
function findChord(arr) {

	//var string = "ABCD%nEFGHI%nJKLM%nNO";
	var arr = ["you a%re my friend", "you are % my fr%niend"];
	var chords = [];

	for (var i = 0; i < arr.length; i++) {
		var temps = arr[i].split("%");
		for (var j = 0; j < arr.length; j++)
			chords.push(temps[j]);
	}

}

function findChord(string) {

	var chords = "";
	var temps = [];

	for (i = 0; i < string.length; i++) {
		if (string[i] == "%") {
			temps.push(i);
		}
	}
	chords = string.substring(temps[i], temps[i]);
}
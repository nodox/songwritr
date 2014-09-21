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

function saveImage(){
	var canv = document.getElementById("canv");

	Canvas2Image.saveAsPNG(canv);
}

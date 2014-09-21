$(function() {

	init();
	$( window ).resize( init );

	$( '#toCustom' ).click( toCustom );
	$( '#exitCustom' ).click( exitCustom );
	$( '#submitCustom' ).click( imgChanger );

	$( '.sidebar ul li' ).click( function() {
		var $t = $( this );
		if ( $t.hasClass( 'active' ) ) {
			$t.removeClass( 'active' );
		} else {
			$t.siblings().removeClass( 'active' );
			$t.addClass( 'active' );
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

function imgChanger() {
	var path = findImg();
	$( '#currentChord img' ).attr( 'src', path );
	exitCustom();
}

function notImg(url) {
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

<<<<<<< HEAD
	if ( notImg( imgPath ) )
		imgPath = "img/empty.png";

=======
	makeChords(imgPath);
>>>>>>> 9a1f0b46ceadbe350f2381f31f0990fe052be6cc
	return imgPath;
}

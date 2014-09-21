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
	console.log( path );
	$( '#currentChord img' ).attr( 'src', path );
	exitCustom();
}

function findImg() {
	var imgPath = "img/";
	$( '.custom' ).find( '.active' ).each( function() {
		imgPath += $( this ).text();
	});
	imgPath += ".jpg";

	makeChords(imgPath);
	return imgPath;
}

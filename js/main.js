$(function() {

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

function toCustom() {
	$( '.custom' ).css( 'left' , "0%" );
}
function exitCustom() {
	$( '.custom' ).css( 'left' , "100%" );
}

function imageChanger() {
	var path = findImg();
	$( '#currentChord img' ).attr( 'src', path );
}

function findImg() {
	var imgPath = "images/";
	$( '.custom' ).find( '.active' ).each( function() {
		imgPath += $( this ).text();
	});
	imgPath += ".jpg";

	return imgPath;
}

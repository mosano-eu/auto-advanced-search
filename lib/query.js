var Util = require( 'findhit-util' ),
	regexp = /([\+\-\<\>])?(^[a-z]{1,25}|[a-z]{4,25}|\"[a-z]{4,25}(?:\ [a-z]{1,25})+")/g;   

module.exports = function ( query ) {
	if( query.length == 0 || typeof query != 'string' ) return '';

	var result,
		string = query.match( regexp );

	Util.each( string, function ( string ){
		result = ! result && '+' + string || result.concat( ' +' + string );
	});

	return result;
};
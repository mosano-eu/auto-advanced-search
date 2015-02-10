// Require dependencies
var Util = require( 'findhit-util' ),
	
	// Regexp filtering
	regexp = /([\+\-\<\>])?(^[a-z]{1,25}|[a-z]{4,25}|\"[a-z]{4,25}(?:\ [a-z]{1,25})+")/g;   

module.exports = function ( query ) {
	
	// If the query isn't want expected return a empty string
	if( ! query || query.length == 0 || typeof query != 'string' ) return '';

	var result,

		// Match string with Regexp
		string = query.match( regexp );

	// For each filtered result concat with a plus ( + )
	Util.each( string, function ( string ){

		// Concatenate the results
		result = ! result && '+' + string || result.concat( ' +' + string );

	});

	// Return the required results
	return result;
};
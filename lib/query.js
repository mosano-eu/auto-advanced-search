// dependencies
var Util = require( 'findhit-util' ),
	
	// regexp filtering string
	regexp = /([\+\-\<\>])?(^[a-z]{1,25}|[a-z]{3,25}|\"[a-z]{3,25}(?:\ [a-z]{1,25})+")/g;   


module.exports = function ( query ) {

	if( typeof query != 'string' ) return query;

	var string = query.match( regexp ) || false;

	if( query.length == 0 ) return query;

	query = Util.String.decapitalize( query );

	// declare variables
	var result, type,

		// types supported by advanced search
		options = [ '+', '-', '<', '>' ];

	// function to see if the advanced mode its on
	var advanced = function ( string ){

		// see if the requested option exist
		for( var i in options ){
			if( string.indexOf( options[i] ) !== -1 ){
				return options[i];
			}
		}

		//if not return false for default
		return false;
	};

	// for each filtered result concatenate with respective option
	Util.each( string, function ( string ){

		// lets see if the advanced search mode is on, if not, defaultilize it with a plus
		type = advanced( string ) || '';

		// take of the extra characters
		string = type && string.replace( type, '' ) || string.replace( type, type );

		// do the concatenation with the requested option
		result = ! result && type + string + '*' || result.concat( ' ', type || '+', '(', string, '*)' );

	});

	// add wild card at the end of the last string and return it
	return result;

};
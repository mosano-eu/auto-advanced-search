// Require dependencies
var Util = require( 'findhit-util' );

// -----------------------------------------------------------------------------


// Regexp filters
var aan = ( Util.RegExp.builder(
		[ 'alpha', 'accented', 'numeric' ],
		{ entire: false }
	)+'')
		.replace( /\//ig, '')
		.replace( /gi$/, '' );

var regexp = {

	nonvalid: new RegExp(
		'[^'+ aan +']',
		'g'
	),

	parts: new RegExp(
		'([\+\-\<\>])?(^['+ aan +']{1,25}|['+ aan +']{4,25}|\"['+ aan +']{4,25}(?:\ ['+ aan +']{1,25})+")',
		'g'
	)
};

/**
 * aas - accepts arguments for generating a mysql rule for full-text search
 *
 * @param  {String|Array}	fields  column field or fields to query on
 * @param  {String}			query   string to be dismantled of
 * @param  {Object}			options options to enrich query
 * @return {String}         		MySQL valid full-text filter
 */
module.exports = function aas ( fields, query, options ) {
	var generatedQuery = [];

	// fields handling
	fields =
		Util.is.String( fields ) && fields ||
		Util.is.Array( fields ) && fields.join(', ') ||
		false;

	if( ! fields ) {
		throw new TypeError( "Invalid fields type" );
	}

	// query handling
	query =
		Util.is.String( query ) && query
			.replace( /\s/g, ' ' )
			.trim() ||
		false;

	if( ! query ) {
		throw new TypeError( "Invalid query type" );
	}

	// options handling
	options = Util.is.Object( options ) && options || {};
	options.__proto__ = defaultOptions;

	// query dismantling
		// literaly as queried
		var literal = query.replace( regexp.nonvalid, '' );

		if( literal ) {
			generatedQuery.push(
				'>"'+ literal +'"'
			);

			// Add, literal based, a major and minor importance words
			var words = literal.split( ' ' ),
				major = [],
				minor = [];

			Util.Array.each( words, function ( word ) {
				major.push( '+' + word );
				minor.push( word + '*' );
			});

			generatedQuery.push(
				'( '+ major.join(' ') +' )',
				'<( '+ minor.join(' ') +' )'
			);
		}

		// divided

	if ( ! generatedQuery || generatedQuery.length === 0 ) {
		throw new Error( "We can't figure out your query, sorry" );
	}

	// query generation
	generatedQuery =
		'MATCH ('+ fields +') ' +
		'AGAINST ' +
		'(' +
			'\'' + generatedQuery.join( ' ' ).replace( '\'', '"' ) + '\'' + ' ' +

			( options.booleanMode && 'IN BOOLEAN MODE ' || '' ) +
			( options.queryExpansion && 'WITH QUERY EXPANSION ' || '' ) +
		')';

	// return generated query
	return generatedQuery;
};

var defaultOptions = {
	queryExpansion: false,
	booleanMode: true
};

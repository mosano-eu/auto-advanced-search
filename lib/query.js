// Require dependencies
var Util = require( 'findhit-util' );

// -----------------------------------------------------------------------------


// Regexp filters
var aan = ( Util.RegExp.builder(
		[ 'alpha', 'accented', 'numeric', 'spaced', 'cotters', 'dividers' ],
		{ entire: false }
	)+'')
		.replace( /^\/\[/i, '' )
		.replace( /\]\/gi/i, '' );


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

			// clean non valid chars of entire query
			.replace( regexp.nonvalid, '' )

			// Avoid hexadecimal sql injections
			.replace( /0x[0-9A-F]+/ig, '' )

			// Strip extra spaces
			.replace( /\s/g, ' ' )

			// Remove wildcards, dots, parentesis and things like that
			.replace( /[\*\.\(\)\;\,\:\@\+\\\<\>]/g, '' )

			// Put all on lower case
			.toLowerCase()

			// trim side spaces
			.trim();

	if( ! query ) {
		// Instead of returning an error, we figured out that was best to maintain
		// an working state by returning 1=1 which will always be true
		return '1=1';
	}

	// options handling
	options = Util.is.Object( options ) && options || {};
	options.__proto__ = defaultOptions;

	// query dismantling


		// Check if we have more than one word, and add a literal or initial
		// search
		var literal = clean( query );
		generatedQuery.push(
			'>( +"'+ literal +'" "'+ literal +'*" )'
		);

		// Add, literal based, a major and minor importance words
		var words = literal.split( ' ' ),
			major = [],
			minor = [];

		words.forEach(function ( word ) {
			var tmpword;

			// Clean word first
				word = clean( word );

				// Remove endchar from word if it ends with:
				// -
				// '
				while( [ '-', '\'' ].indexOf( word.substr( -1 ) ) !== -1 ) {
					word = word.substr( 0, word.length -1 );
				}

			if ( ! word ) return;

			// Check if words has -
			// porto-rio -> porto rio
			word.split( '-' ).forEach(function ( dividedword ) {
				dividedword = clean( dividedword );

				if ( dividedword ) {
					minor.join( dividedword );
				}
			});

			// if word has `'`, we should remove it and add as word
			// mcdonald's -> mcdonalds
			if( word.indexOf( '\'' ) !== -1 ) {
				tmpword = clean( word.replace( /\'/g, '' ) );

				if ( tmpword ) {
					major.push( tmpword );
				}
			}

			// If not, but it ends with an 's', try '\'s'
			// mcdonalds -> mcdonald's
			if ( word.indexOf( '\'' ) === -1 && word.substr( -1 ) === 's' ) {
				tmpword = clean( word.substr( 0, word.length -1 ) + '\'s' );

				if ( tmpword ) {
					major.push( '"' + tmpword + '"' );
				}
			}

			major.push( word );
			minor.push( word + '*' );
		});

		generatedQuery.push(
			'( '+ major.join(' ') +' )',
			'<( '+ minor.join(' ') +' )'
		);

		// divided

	if ( ! generatedQuery || generatedQuery.length === 0 ) {
		throw new Error( "We can't figure out your query, sorry" );
	}

	// query generation
	generatedQuery =
		'MATCH ('+ fields +') ' +
		'AGAINST ' +
		'(' +
			'\'' +
				generatedQuery.join( ' ' )
					.replace( /\'/g, '\\\'' )
				+
			'\'' + ' ' +
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

function clean ( str ) {
	return str
		// Mysql comments tag
		.replace( /--/g, '' )

		// yeheyehyehey
		.replace( /[\"\;]/g, '' )

		// trim spaces for eval proposes
		.trim();
}

var query = require( '../' ),
	chai = require( 'chai' ),
	expect = chai.expect,
	sinon = require( 'sinon' );

describe( "auto-advanced-search", function() {

	function regExpTest( string ){

		if( typeof string != 'string' ){
			return false;
		}

		if( ! /([\+\-\<\>])?(^[a-z]{1,25}|[a-z]{4,25}|\"[a-z]{4,25}(?:\ [a-z]{1,25})+")/.test( string ) ){
			return false;
		}

		return string;
	};

	describe( "accepted string", function() {
		var query = 'quinta de sao jose';

		it( 'should be a string', function (){

			expect( query ).to.be.a( 'string' );

		});

		it( 'should match the regexp', function (){

			expect( query ).to.match( /([\+\-\<\>])?(^[a-z]{1,25}|[a-z]{4,25}|\"[a-z]{4,25}(?:\ [a-z]{1,25})+")/ );

		});
	
	});

	describe( "not a string", function() {
		var query = 4;

		var test = regExpTest( query );

		it( 'should return false if it isnt a string', function (){

			expect( test ).to.be.a( 'boolean' );
			expect( test ).to.be.false;

		});

		it( 'should not match if it isnt an expected query', function (){

			expect( query ).not.to.match( /([\+\-\<\>])?(^[a-z]{1,25}|[a-z]{4,25}|\"[a-z]{4,25}(?:\ [a-z]{1,25})+")/ );

		});

	});

});



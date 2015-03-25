var aas = require( '../' ),
	chai = require( 'chai' ),
	expect = chai.expect;

describe( "auto-advanced-search", function() {

	describe( "must return a function to filter query", function() {
		var fn = aas;

		it( 'should exist and it is a function', function (){
			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'function' );
		});
	
	});


});



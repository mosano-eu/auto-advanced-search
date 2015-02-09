var aas = require( '../' ),
	chai = require( 'chai' ),
	expect = chai.expect,
	sinon = require( 'sinon' );

describe( "auto-advanced-search", function() {

	describe( "first string can contain 1 caracter", function() {
		var string = 'x',
			fn = aas( string );

		it( 'should exist and return a string', function (){
			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'string' );
		});

		it( 'should have a length of 2', function (){
			// The length is 2 because the plus have been added here.
			expect( fn ).to.have.length( 2 );
		});

		it( 'should return one string with a plus in the begining', function (){
			expect( fn ).to.equal( '+x' );
		});
	
	});

	describe( "first string can contain 2 caracters", function() {
		var string = 'xx',
			fn = aas( string );

		it( 'should exist and return a string', function (){
			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'string' );
		});

		it( 'should have a length of 3', function (){
			// The length is 3 because the plus have been added here.
			expect( fn ).to.have.length( 3 );
		});

		it( 'should return one string with a plus in the begining', function (){
			expect( fn ).to.equal( '+xx' );
		});
	
	});

	describe( "first string can contain 3 caracters", function() {
		var string = 'xxx',
			fn = aas( string );

		it( 'should exist and return a string', function (){
			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'string' );
		});

		it( 'should have a length of 4', function (){
			// The length is 4 because the plus have been added here.
			expect( fn ).to.have.length( 4 );
		});

		it( 'should return one string with a plus in the begining', function (){
			expect( fn ).to.equal( '+xxx' );
		});
	
	});

	describe( "one string factor", function() {
		var string = 'guarda sol';

		it( 'should exist and return a string', function (){
			var fn = aas( string );

			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'string' );
		});

		it( 'should return one strings with plus in the begining of each', function (){
			var fn = aas( string );

			expect( fn ).to.equal( '+guarda' );
		});
	
	});

	describe( "two strings factor", function() {
		var string = 'quinta de sao jose';

		it( 'should exist and return a string', function (){
			var fn = aas( string );

			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'string' );
		});

		it( 'should return two strings with plus in the begining of each', function (){
			var fn = aas( string );

			expect( fn ).to.equal( '+quinta +jose' );
		});
	
	});

});



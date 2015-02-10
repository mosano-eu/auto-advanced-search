var aas = require( '../' ),
	chai = require( 'chai' ),
	expect = chai.expect;

describe( "auto-advanced-search", function() {

	describe( "must return a function to parse query", function() {
		var fn = aas;

		it( 'should exist and it is a function', function (){
			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'function' );
		});
	
	});

	describe( "the returned result must be a string", function() {
		var string = 'quinta de sao jose da penha',
			fn = aas( string );

		it( 'should exist and return a string', function (){
			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'string' );
		});

	});

	describe( "string:'one two six ten' - only return the first string", function() {
		var string = 'one two six ten',
			fn = aas( string );

		it( 'should have a length of 4', function (){
			// The length is 4 because the plus have been added here.
			expect( fn ).to.have.length( 4 );
		});

		it( 'should return one string with a plus in the begining', function (){
			expect( fn ).to.equal( '+one' );
		});
	
	});

	describe( "string:'x' - first string can contain 1 caracter", function() {
		var string = 'x',
			fn = aas( string );

		it( 'should have a length of 2', function (){
			// The length is 2 because the plus have been added here.
			expect( fn ).to.have.length( 2 );
		});

		it( 'should return one string with a plus in the begining', function (){
			expect( fn ).to.equal( '+x' );
		});
	
	});

	describe( "string:'xx' - first string can contain 2 caracters", function() {
		var string = 'xx',
			fn = aas( string );

		it( 'should have a length of 3', function (){
			// The length is 3 because the plus have been added here.
			expect( fn ).to.have.length( 3 );
		});

		it( 'should return one string with a plus in the begining', function (){
			expect( fn ).to.equal( '+xx' );
		});
	});

	describe( "string:'xxx' - first string can contain 3 caracters", function() {
		var string = 'xxx',
			fn = aas( string );

		it( 'should have a length of 4', function (){
			// The length is 4 because the plus have been added here.
			expect( fn ).to.have.length( 4 );
		});

		it( 'should return one string with a plus in the begining', function (){
			expect( fn ).to.equal( '+xxx' );
		});
	
	});

	describe( "string:'quinta de' - one string factor", function() {
		var string = 'quinta de',
			fn = aas( string );

		it( 'should exist and return a string', function (){
			expect( fn ).to.be.ok;
			expect( fn ).to.be.a( 'string' );
		});

		it( 'should return one strings with plus in the begining of the string', function (){
			expect( fn ).to.equal( '+quinta' );
		});
	
	});

	describe( "string:'quinta de sao jose' - two strings factor", function() {
		var string = 'quinta de sao jose',
			fn = aas( string );

		it( 'should return two strings with plus in the begining of each', function (){
			expect( fn ).to.equal( '+quinta +jose' );
		});
	});

	describe( "string:'quinta de sao jose da penha' - three strings factor", function() {
		var string = 'quinta de sao jose da penha',
			fn = aas( string );

		it( 'should return two strings with plus in the begining of each', function (){
			expect( fn ).to.equal( '+quinta +jose +penha' );
		});
	});

	describe( "string: 666 ( number ) - if it isn´t a string", function() {
		var string = 666,
			fn = aas( string );

		it( 'should not exist and have to be a string', function (){
			expect( fn ).not.to.be.ok;
			expect( fn ).to.be.a( 'string' );
		});

		it( 'should return an empty string', function (){
			expect( fn ).to.equal( '' );
		});
	
	});

});



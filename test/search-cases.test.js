var aas = require( '../' ),
    Util = require( 'findhit-util' ),
    chai = require( 'chai' ),
    expect = chai.expect,

    database = require( './resources/database' );

// -----------------------------------------------------------------------------

describe( 'aas', function () {

    describe( 'clube 3C', function () {

        ftit( 'clube 3C', [
            'Clube 3C',
        ]);

        ftitskip( 'clube 3', [
            'Clube 3C',
        ]);

    });

    describe( 'Quinta de São José', function () {

        ftit( 'Quinta de São José', [
            'Quinta de São José',
        ]);

        ftit( 'Quinta de São', [
            'Quinta de São José',
        ]);

        ftit( 'Quinta de', [
            'Quinta de São José',
        ]);

        ftit( 'quinta sao josé', [
            'Quinta de São José',
        ]);

        ftit( 'quinta sao', [
            'Quinta de São José',
        ]);

        ftit( 'quinta josé', [
            'Quinta de São José',
        ]);

        ftit( 'quinta jo', [
            'Quinta de São José',
        ]);

    });

    describe( 'Café Guarda Sol', function () {

        ftit( 'Café Guarda Sol', [
            'Café Guarda Sol',
        ]);

        ftit( 'guarda sol', [
            'Café Guarda Sol',
        ]);

        ftit( 'guarda so', [
            'Café Guarda Sol',
        ]);

    });

    describe( 'CARM', function () {

        ftitskip( 'CARM', [
            'CARM'
        ]);

        ftitskip( 'CAR', [
            'CARM'
        ]);

        ftitskip( 'CA', [
            'CARM'
        ]);

    });

    describe( 'O marinheiro', function () {

        ftit( 'O marinheiro', [
            'O marinheiro'
        ]);

        ftitskip( 'O marinhe', [
            'O marinheiro'
        ]);

        ftitskip( 'O mar', [
            'O marinheiro'
        ]);

    });

    describe( 'Café Café', function () {

        ftit( 'Café Café', [
            'Café Café'
        ]);

        ftit( 'cafe cafe', [
            'Café Café'
        ]);

    });

    describe( "McDonald's", function () {

        ftit( "McDonald's", [
            "McDonald's Antas",
            "McDonald's Boavista",
            "McDonald's Via Catarina",
        ]);

        ftit( "mcdonald", [
            "McDonald's Antas",
            "McDonald's Boavista",
            "McDonald's Via Catarina",
        ]);

        ftit( 'mcdonalds', [
            "McDonald's Antas",
            "McDonald's Boavista",
            "McDonald's Via Catarina",
        ]);

    });

    describe( "QB Essence", function () {

        ftit( 'QB Essence', [
            'QB Essence'
        ]);

        ftitskip( 'QB Esse', [
            'QB Essence'
        ]);

        ftitskip( 'QB', [
            'QB Essence'
        ]);

    });

    describe( 'Porto-Rio', function () {

        ftit( 'Porto-Rio', [
            'Porto-Rio'
        ]);

    });

    describe( '6Only', function () {

        ftit( '6Only', [
            '6Only'
        ]);

    });

    describe( 'Quinta da Foz', function () {

        ftit( 'Quinta da Foz', [
            'Quinta da Foz',
        ]);

        ftit( 'quinta da', [
            'Quinta da Foz',
        ]);

    });

    describe( 'Góshó', function () {

        ftit( 'Góshó', [
            'Góshó',
        ]);

        ftit( 'gosho', [
            'Góshó',
        ]);

    });

    describe( "Lima's Desporto", function () {

        ftit( "Lima's Desporto", [
            "Lima's Desporto",
        ]);

        ftit( 'limas', [
            "Lima's Desporto",
            "Café Limas"
        ]);

        ftit( 'limas desporto', [
            "Lima's Desporto"
        ]);

    });

});

// Private methods

function ftit( query, expected ) {
    it( query, function () {
        return fullTextGenerator( query, expected );
    })
}

function ftitskip( query, expected ) {
    it.skip( query, function () {
        return fullTextGenerator( query, expected );
    })
}

/**
 * fullTextGenerator - this function will test a query and consecutive arguments
 * if they match and respect order by checking name on instance.
 *
 * @param  {type} query description
 * @return {type}       description
 */
function fullTextGenerator ( query, expected ) {

    if( Util.isnt.String( query ) && ! query ) {
        throw new TypeError( "please provide a valid query argument" );
    }

    if( Util.isnt.Array( expected ) && expected.length === 0 ) {
        throw new TypeError( "please provide a valid expected argument" );
    }

    var match = aas([
        'FullTextSearch.name',
        'FullTextSearch.intro'
    ], query );

    // Execute a findAll query similar to what we do internally
    return database.models.FullTextSearch
    .findAll({
        where: match,
        order: [
            [ database.Sequelize.literal( match ), 'DESC' ],
        ]
    })
    .then(function ( rows ) {
        for ( var i in expected ) {
            var instance = rows[ i ];

            if( ! instance ) {
                console.log( match );
                throw new Error( "Expected '"+ expected[ i ] +"' but I didn't found an instance on that position" );
            }

            if( instance.name !== expected[ i ] ) {
                console.log( match, rows.map(function ( instance ) { return instance.toJSON() }) );
                throw new Error( "Expected '"+ expected[ i ] +"' but instance was '"+ instance.name +"'" );
            }
        }
    });

};

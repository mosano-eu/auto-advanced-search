var aas = require( '../' ),
    Util = require( 'findhit-util' ),
    chai = require( 'chai' ),
    expect = chai.expect,

    database = require( './resources/database' );

// -----------------------------------------------------------------------------

describe( 'aas', function () {

    describe( 'clube 3C', function () {

        it( 'clube 3C', function () {
            return fullTextGenerator( 'clube 3C', [
                'Clube 3C',
            ]);
        });

        it( 'clube 3', function () {
            return fullTextGenerator( 'clube 3', [
                'Clube 3C',
            ]);
        });

        it( 'clube', function () {
            return fullTextGenerator( 'clube', [
                'Clube de Golfe de Braga',
                'Clube 0',
                'Clube 7+',
                'Clube 3C',
                'Clube 21',
            ]);
        });

    });

    describe( 'Quinta de São José', function () {

        it( 'Quinta de São José', function () {
            return fullTextGenerator( 'Quinta de São José', [
                'Quinta de São José',
            ]);
        });

        it( 'Quinta de São', function () {
            return fullTextGenerator( 'Quinta de São', [
                'Quinta de São José',
            ]);
        });

        it( 'Quinta de S.', function () {
            return fullTextGenerator( 'Quinta de S.', [
                'Quinta de São José',
            ]);
        });

        it( 'Quinta de', function () {
            return fullTextGenerator( 'Quinta de', [
                'Quinta de São José',
            ]);
        });

        it( 'quinta sao josé', function () {
            return fullTextGenerator( 'quinta sao josé', [
                'Quinta de São José',
            ]);
        });

        it( 'quinta sao', function () {
            return fullTextGenerator( 'quinta sao', [
                'Quinta de São José',
            ]);
        });

        it( 'quinta josé', function () {
            return fullTextGenerator( 'quinta josé', [
                'Quinta de São José',
            ]);
        });

        it( 'quinta jo', function () {
            return fullTextGenerator( 'quinta jo', [
                'Quinta de São José',
            ]);
        });

        it( 'quinta', function () {
            return fullTextGenerator( 'quinta', [
                'Quinta de São José',
                'Quinta D. José',
                'Quinta da Foz'
            ]);
        });

    });

    describe( 'Café Guarda Sol', function () {

        it( 'Café Guarda Sol', function () {
            return fullTextGenerator( 'Café Guarda Sol', [
                'Café Guarda Sol',
            ]);
        });

        it( 'guarda sol', function () {
            return fullTextGenerator( 'guarda sol', [
                'Café Guarda Sol',
            ]);
        });

        it( 'guarda so', function () {
            return fullTextGenerator( 'guarda so', [
                'Café Guarda Sol',
            ]);
        });

    });

    describe( 'CARM', function () {

        it( 'CARM', function () {
            return fullTextGenerator( 'CARM', [
                'CARM'
            ]);
        });

        it( 'CAR', function () {
            return fullTextGenerator( 'CAR', [
                'CARM'
            ]);
        });

        it( 'CA', function () {
            return fullTextGenerator( 'CA', [
                'CARM'
            ]);
        });

    });

    describe( 'O marinheiro', function () {

        it( 'O marinheiro', function () {
            return fullTextGenerator( 'O marinheiro', [
                'O marinheiro'
            ]);
        });

        it( 'O marinhe', function () {
            return fullTextGenerator( 'O marinhe', [
                'O marinheiro'
            ]);
        });

        it( 'O mar', function () {
            return fullTextGenerator( 'O mar', [
                'O marinheiro'
            ]);
        });

    });

    describe( 'Café Café', function () {
        
        it( 'Café Café', function () {
            return fullTextGenerator( 'Café Café', [
                'Café Café'
            ]);
        });

        it( 'Café Ca', function () {
            return fullTextGenerator( 'Café Ca', [
                'Café Café'
            ]);
        });

    });

    describe( "McDonald's", function () {
        
        it( "McDonald's", function () {
            return fullTextGenerator( "McDonald's", [
                "McDonald's Antas",
                "McDonald's Boavista",
                "McDonald's Via Catarina",
            ]);
        });

        it( "mcdonald", function () {
            return fullTextGenerator( "mcdonald", [
                "McDonald's Antas",
                "McDonald's Boavista",
                "McDonald's Via Catarina",
            ]);
        });

        it( 'mcdonalds', function () {
            return fullTextGenerator( 'mcdonalds', [
                "McDonald's Antas",
                "McDonald's Boavista",
                "McDonald's Via Catarina",
            ]);
        });

    });

    describe( "QB Essence", function () {
        
        it( 'QB Essence', function () {
            return fullTextGenerator( 'QB Essence', [
                'QB Essence'
            ]);
        });

        it( 'QB Esse', function () {
            return fullTextGenerator( 'QB Esse', [
                'QB Essence'
            ]);
        });

        it( 'QB', function () {
            return fullTextGenerator( 'QB', [
                'QB Essence'
            ]);
        });

    });

    describe( 'Porto-Rio', function () {
        
        it( 'Porto-Rio', function () {
            return fullTextGenerator( 'Porto-Rio', [
                'Porto-Rio'
            ]);
        });

        it( 'porto-', function () {
            return fullTextGenerator( 'porto-', [
                'Porto-Rio',
                'Coliseu do Porto',
                'Ibis Porto São João',
                'Chafariz dos Leões',
            ]);
        });

    });

    describe( '6Only', function () {
        
        it( '6Only', function () {
            return fullTextGenerator( '6Only', [
                '6Only'
            ]);
        });

        it( '6O', function () {
            return fullTextGenerator( '6O', [
                '6Only'
            ]);
        });

    });

    describe( 'Quinta da Foz', function () {
        
        it( 'Quinta da Foz', function () {
            return fullTextGenerator( 'Quinta da Foz', [
                'Quinta da Foz',
            ]);
        });

        it( 'quinta da', function () {
            return fullTextGenerator( 'quinta da', [
                'Quinta da Foz',
            ]);
        });

        it( 'foz', function () {
            return fullTextGenerator( 'foz', [
                'Mercure Figueira da Foz Hotel',
                'Restaurante Foz Velha',
                'Quinta da Foz'
            ]);
        });

    });

    describe( 'Góshó', function () {
        
        it( 'Góshó', function () {
            return fullTextGenerator( 'Góshó', [
                'Góshó',
            ]);
        });

        it( 'gosho', function () {
            return fullTextGenerator( 'gosho', [
                'Góshó',
            ]);
        });

    });

    describe( "Lima's Desporto", function () {
        
        it( "Lima's Desporto", function () {
            return fullTextGenerator( "Lima's Desporto", [
                "Lima's Desporto",
            ]);
        });

        it( 'limas', function () {
            return fullTextGenerator( 'limas', [
                "Lima's Desporto",
                "Café Limas"
            ]);
        });

        it( 'limas desporto', function () {
            return fullTextGenerator( 'limas desporto', [
                "Lima's Desporto"
            ]);
        });

    });

});

// Private methods

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
                throw new Error( "Expected '"+ expected[ i ] +"' but I didn't found an instance on that position" );
            }

            if( instance.name !== expected[ i ] ) {
                throw new Error( "Expected '"+ expected[ i ] +"' but instance was '"+ instance.name +"'" );
            }
        }
    });

};

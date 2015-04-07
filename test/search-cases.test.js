var fullTextGenerator = require( './resources/full-text-generator' );

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

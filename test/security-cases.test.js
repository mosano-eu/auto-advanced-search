var aas = require( '../' ),
    Util = require( 'findhit-util' ),
    chai = require( 'chai' ),
    expect = chai.expect,

    database = require( './resources/database' );

// -----------------------------------------------------------------------------

describe( 'aas', function () {

    function itShouldNotBreakWith ( char ) {
        it( "should not break with "+ char, function (){

            var query = char;
            var match = aas([
                'FullTextSearch.name',
                'FullTextSearch.intro'
            ], query );

            // expect for no query error
            return database.models.FullTextSearch.findAll({
                where: match
            });

        });
    }

    [

        '"',
        "'",
        ';',
        '(',
        ')',
        '()',
        '!',
        '?',
        ':',
        '-',
        '_',
        '`',
        '´',
        '|',
        '\\',
        '#',
        '$',
        '%',
        '&',
        '/',
        '=',
        '+',
        'º',
        'ª',
        'ç',
        '~',
        '^',
        '§',
        '±',
        '@',
        '€',
        '£',
        '‰',
        '¶',
        '✓',
        '«',
        '»',
        '>',
        '<',
        '≤',
        '≥',
        '—',
        '…',
        '“',
        '”',

    ].forEach( itShouldNotBreakWith );

    it( "should clean also hexadecimal shits", function (){
        var query = '0x3425f';
        var match = aas([
            'FullTextSearch.name',
            'FullTextSearch.intro'
        ], query );

        // expect for no query error
        return database.models.FullTextSearch.findAll({
            where: match
        });
    });

});

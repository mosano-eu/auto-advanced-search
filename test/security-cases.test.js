var aas = require( '../' ),
    Util = require( 'findhit-util' ),
    chai = require( 'chai' ),
    expect = chai.expect,

    database = require( './resources/database' );

// -----------------------------------------------------------------------------

describe( 'aas', function () {

    it( "should not break with \"", function (){
        var query = '\"';
        var match = aas([
            'FullTextSearch.name',
            'FullTextSearch.intro'
        ], query );

        // expect for no query error
        return database.models.FullTextSearch.findAll({
            where: match
        });
    });

    it( "should not break with \'", function (){
        var query = '\'';
        var match = aas([
            'FullTextSearch.name',
            'FullTextSearch.intro'
        ], query );

        // expect for no query error
        return database.models.FullTextSearch.findAll({
            where: match
        });
    });

    it( "should not break with \;", function (){
        var query = '\;';
        var match = aas([
            'FullTextSearch.name',
            'FullTextSearch.intro'
        ], query );

        // expect for no query error
        return database.models.FullTextSearch.findAll({
            where: match
        });
    });

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

var aas = require( '../../' ),
    Util = require( 'findhit-util' ),
    chai = require( 'chai' ),
    expect = chai.expect,

    database = require( './database' );

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


module.exports = fullTextGenerator;

var Sequelize = require( 'sequelize' ),
    Util = require( 'findhit-util' ),
    Promise = require( 'bluebird' ),

    chai = require( 'chai' ),
    expect = chai.expect,

    debug = require( 'debug' )( 'auto-advanced-search:test:resources:database' );

// -----------------------------------------------------------------------------

var database = module.exports = new Sequelize(
    process.env.DB_DATABASE || 'aas_test',
    process.env.DB_USERNAME || 'aas_test',
    process.env.DB_PASSWORD || 'aas_test',
    {
        dialect: 'mysql',
        logging: debug,
    }
);

var ready = [];

Util.Array.each( require( './models' ), function ( filename ) {
    var Model = database.import( __dirname + '/models/' + filename + '.js' );
    Model.filename = filename;
});


// Save sync promise as database.ready
database.synced = database.sync({ force: true });
database.ready = database.synced
.then(function () {
    return Promise.props(
        Util.Object.map( database.models, function ( Model ) {

            debug( "%s: Trying to fetch data from json", Model.name );

            try{
                var data = require( './data/' + Model.filename );

                if( Util.isnt.Array( data ) ) {
                    throw new Error( "data doesn't seem to be an array!!" );
                }

            } catch( err ) {
                return;
            }

            debug( "%s: data fetched successfuly, creating intances...", Model.name );

            Model.data_length = data.length;

            return Model.bulkCreate( data );

        })
    );
})
.return( database );

// Add tests for database

describe( "database", function () {

    before(function () {
        return database.ready;
    });

    it( "check if databases are with same count as json's.length", function () {
        var promises = [];

        return Promise.props(
            Util.Object.map( database.models, function ( Model ) {

                if ( ! Model.data_length ) {
                    return;
                }

                return Model.count()
                .then(function ( count ) {
                    expect( count ).to.be.equal( Model.data_length );
                    expect( count ).to.not.be.equal( 0 );
                });
            })
        );

    });

});

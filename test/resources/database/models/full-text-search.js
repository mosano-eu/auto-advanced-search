module.exports = function ( database, DT ) {
    return database.define(
        // Name
        'FullTextSearch',

        // Attributes
        {
            name: {
                type: DT.STRING( 255 ),
            },

            intro: {
                type: DT.STRING(),
            },
        },

        // Options
        {
            indexes: [
                {
                    type: 'FULLTEXT',
                    fields: [ 'name', 'intro' ],
                    concurrently: true
                },
            ],
        }
    );
};

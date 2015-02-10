# auto-advanced-search

Auto-advanced-search is a module to prepare strings to perform match against in boolean mode modifier in mysql, that handles relevences of the required words for the query.

***Dependencies:*** - ``findhit-util``

***Example:***

```

// Require dependencies
var aas = require( 'auto-advanced-search' );

// Do the filtering
var string = 'something that i want to find',

// Call function with the required query
var query = aas( string );

// query - returns '+something +that +want +find'

```
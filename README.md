# auto-advanced-search
Auto-advanced-search is a module to work queries in mysql match-against mode in boolean mode.

A function that returns the same string if the string matches with the Regexp validation, if not, returns false;

```
// Require the module
var mmabm = require( 'auto-advanced-search' );

// Your query
var query = 'hotchicks';

// Check if it passed in the test
query = mmabm( query );

// Do what you want with your tested query
if( query ){
	// ...bla bla
}

```

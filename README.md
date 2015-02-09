# mysql-match-against-boolean-mode
Mysql-match-against-boolean-mode is a module to work queries in mysql match-against mode in boolean mode.

A function that returns the same string if the string matches with the Regexp validation, if not, returns false;

```
// Require the module
var mmabm = require( 'mysql-match-against-boolean-mode' );

// Your query
var query = 'hotchicks';

// Check if it passed in the test
query = mmabm( query );

if( query ){
	// ...bla bla
}

```

# auto-advanced-search

*Auto-advanced-search is a module to prepare strings to perform match against in boolean mode modifier in mysql, that handles relevences of the required words for the query.*

***Depedencies:*** - ``findhit-util``

***Example:***

```js
// Require dependencies
var aas = require( 'auto-advanced-search' );

// Do the filtering
var string = 'something that i want to find',

// Call function with the required query
var query = aas( string );

// Returned result
	// query - returns '+something +that +want +find'
```

The first `string` is always returned because, in this way, while the user is typing the word is going to appear some results. The next words will be filtered if it have three characters or less because in most cases this words doesn't have much relevance in the searching.
The response will return the `string` with a plus concatenated, ex.`'+string'` for the `in boolean mode` modifier assigns the relevance to the query.


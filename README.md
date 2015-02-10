# auto-advanced-search

*Auto-advanced-search is a module to prepare strings to perform match against in boolean mode modifier in mysql, that handles relevences of the required words for the query.*

***Dependencies:*** - ``findhit-util``

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

**Resume:**

The first `string` is always returned because, in this way, while the user is typing the word is going to appear some results. The next words will be filtered if it have three characters or less because in most cases this words doesn't have much relevance in the searching.
In the last word have a "*", like the sql wildcard "%", for the next characters match.
The response will return the `string` with a plus "+" and in the last word have a "*", like the sql "LIKE" wildcard "%", ex.`'+string*'` or '+first +second*' for the `in boolean mode` modifier assigns the relevance to the query.

*Find with hit, and give their relevance with auto-advanced-search for better searches!*
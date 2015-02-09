module.exports = function ( query ){
	return /([\+\-\<\>])?(^[a-z]{1,25}|[a-z]{4,25}|\"[a-z]{4,25}(?:\ [a-z]{1,25})+")/.test( query ) && query || false;
};
#!/usr/local/bin/node

var flatten = function(a) {
	var i = a.slice();
	return i.join();
	
};

var arr = ([[1,2,3],[1,2,3]]);
console.log(flatten(arr));

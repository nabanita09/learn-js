#!/usr/local/bin/node

var drop = function(a, n) {
	return a.slice(n);
};

var array = [1, 2, 3, 4, 5];

console.log(drop(array, 2));

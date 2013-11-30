#!/usr/local/bin/node

var dropRight = function(a,n){
	return a.splice(0,3);	
	
};

var arr = [1, 2, 3, 4, 5];

console.log(dropRight(arr,2));

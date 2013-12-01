#!/usr/local/bin/node

var count = function(arr,p){
	var counter = 0;
	var i;
	for(i = 0; i < arr.length; i++){
		if(p(arr[i])){
			counter++;
		}
	}
	return counter;
}



var array = [2, 4, 6, 8];

console.log(count(array,function(n){
	return (n%2) != 0;
}));


console.log(count(array, function(n){
	return (n%2) == 0;
}));
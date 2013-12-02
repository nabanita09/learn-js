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


/* Head function */
var head = function(a){
	return a[0];
}

var array = [1,2,3,4];
console.log(head(array));

/* Init function */
var init = function(arr){
	return arr.slice(0,arr.length-1);
}

var array = [1,2,3,4];
console.log(init(array));

/* Last function */
var last = function(arr){
	return arr.slice(arr.length-1);
}

var array = [1,2,3,4];
console.log(last(array));

/* Tail function */

var tail = function(arr){
	return arr.slice(1);
}

var array=[1,2,3,4];
console.log(tail(array));

/* Distinct function */
var distinct = function(arr){
	var a = [];
	var i;
	for(i = 0; i < arr.length; i++){
		if(a.indexOf(arr[i])==-1){
			a.push(arr[i]);
		}
	}
	return a;
}
var array = [1,2,1,2,3];
console.log(distinct(array));

/* dropRight */
var dropRight = function(arr,n){
	return arr.slice(0,arr.length-n);
}
var array = [1,2,3,4,5,6,7];
console.log(dropRight(array,3));

/* dropWhile */
var dropWhile = function(arr,p){
	var i;
	var a = [];
	for(i = 0; i < arr.length; i++){
		if(!p(arr[i])){
			a.push(arr[i]);
		}
	}
	
	return a;
}
var isOdd = function(n){
	return (n%2)!=0;
}
var array = [1,2,3,4,5];
console.log(dropWhile(array,isOdd));

/* endsWith */
 var endsWith = function(a,b){
 	var i = a.length-1;
 	var j = b.length-1;
 	for(j = b.length-1; j >= 0; j--){
 		if(b[j] != a[i]){
 			return false;
 		}
 		i--;
 	}
 	return true;
 }

 console.log(endsWith([1,2,3,4,5],[7,8,9]));

 /* Filter function */

 var filter = function(arr,p){
 		var i;
 		var a = [];
 		for(i = 0; i <= arr.length; i++){
 			if(p(arr[i])){
 				a.push(arr[i]);
 			}
 		}
 		return a;
 }

 var isEven = function(n){
 	return (n%2) == 0;
 }

 var array = [1,2,3,4,5,6,7,8,9,10];
 console.log(filter(array,isEven));

 /* filterNot */

 var filterNot = function(arr,p){
 	var a = [];
 	var i;
 	for(i = 0; i < arr.length; i++){
 		if(!p(arr[i])){
 			a.push(arr[i]);
 		}
 	}
 	return a;
 }

var isEven = function(n){
	return (n%2) == 0
}

 var array = [1,2,3,4,5,6,7,8,9,10];
 console.log(filterNot(array,isEven));
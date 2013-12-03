#!/usr/bin/node

exports.count = function(arr,p){
	var counter = 0;
	var i;
	for(i = 0; i < arr.length; i++){
		if(p(arr[i])){
			counter++;
		}
	}
	return counter;
}


/* head function */
exports.head = function(a){
	return a[0];
}

/* init function */
exports.init = function(arr){
	return arr.slice(0,arr.length-1);
}


/* last function */
exports.last = function(arr){
	return arr.slice(arr.length-1);
}


/* tail function */
exports.tail = function(arr){
	return arr.slice(1);
}

/* distinct function */
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
/*var array = [1,2,1,2,3];
console.log(distinct(array)); */


/* dropRight function */
/* var dropRight = function(arr,n){
	return arr.slice(0,arr.length-n);
}
var array = [1,2,3,4,5,6,7];
console.log(dropRight(array,3)); */


/* dropWhile function */
/* var dropWhile = function(arr,p){
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
console.log(dropWhile(array,isOdd)); */


/* endsWith function */
/* var endsWith = function(a,b){
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

 console.log(endsWith([1,2,3,4,5],[7,8,9])); */


 /* filter function */
/* var filter = function(arr,p){
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
 console.log(filter(array,isEven)); */


 /* filterNot function */
/*  var filterNot = function(arr,p){
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
 console.log(filterNot(array,isEven)); */


 /* find function */
/* var find = function(arr,p){
 	var a = [];
 	var i;
 	for(i = 0; i <= arr.length; i++){
 		if(p(arr[i])){
 			a.push(arr[i]);
 			return a;
 		}
 	}
 	return;
 }

 var isEven = function(n){
 	return (n%2) == 0;
 }

 var array = [1,2,3,4,5,6,7,8,9,10];
 console.log(find(array,isEven)); */


 /* flatten function */
/*  var flatten = function(a,b){
 	var c = [];
 	c = a.concat(b);
 	return c;
 }
 console.log(flatten([1,2,3],[1,2,3])); */

/* union function */
var union = function(a,b){
	var c = [];
	c = a.concat(b);
	return c;
}
console.log(union([1,2,2,2,5],[3,4,5,6,7,8]));

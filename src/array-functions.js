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
exports.distinct = function(arr){
	var a = [];
	var i;
	for(i = 0; i < arr.length; i++){
		if(a.indexOf(arr[i])==-1){
			a.push(arr[i]);
		}
	}
	return a;
}

/* drop function */
exports.drop = function(a, n) {
	return a.slice(n);
};


/* dropRight function */
exports.dropRight = function(arr,n){
	return arr.slice(0,arr.length-n);
}
/*var array = [1,2,3,4,5,6,7];
console.log(dropRight(array,3)); */


/*dropWhile function */
exports.dropWhile = function(arr,p){
	var i;
	var a = [];
	for(i = 0; i < arr.length; i++){
		if(!p(arr[i])){
			a.push(arr[i]);
		}
	}
	
	return a;
}

/* endsWith function */
exports.endsWith = function(a,b){
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


 /* filter function */
exports.filter = function(arr,p){
 		var i;
 		var a = [];
 		for(i = 0; i <= arr.length; i++){
 			if(p(arr[i])){
 				a.push(arr[i]);
 			}
 		}
 		return a;
 }


/* filterNot function */
exports.filterNot = function(arr,p){
 	var a = [];
 	var i;
 	for(i = 0; i < arr.length; i++){
 		if(!p(arr[i])){
 			a.push(arr[i]);
 		}
 	}
 	return a;
 }

/* find function */
exports.find = function(arr,p){
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

 /* flatten function */
exports.flatten = function(a,b){
 	var c = [];
 	c = a.concat(b);
 	return c;
 }


/* union function */
exports.union = function(a,b){
	var c = [];
	c = a.concat(b);
	return c;
}
/*console.log(union([1,2,2,2,5],[3,4,5,6,7,8]));*/

/* forAll function */

/*var forall = function(a,p){
        return p;
}

var greaterThanZero = function(e){
        return (e > 0);
};

var greaterThanFive = function(e){
        return (e > 5);
};

var lessThanEleven = function(e){
        return (e < 11);
};
console.log(forall([1,2,3,4,5,6,7,8,9,10],greaterThanZero));
console.log(forall([1,2,3,4,5,6,7,8,9,10],greaterThanFive));
console.log(forall([1,2,3,4,5,6,7,8,9,10],lessThanEleven));

/* intersect function */

/*var intersect = function(a,b){
        var c = [];
        var i;
        for(i = 0; i < a.length; i++){
                        if(b.indexOf(a[i]) == -1){
                                c.push(b[i]);
                        }
                }
        return c;
}

console.log(intersect([1,2,3,4,5],[3,4,5,6,7,8]));

/* grouped function */

/* var grouped = function(arr,size){
        var grparr = [];
        var i = Math.round(arr.length/size);


}

console.log(grouped([1,2,3,4,5,6,7,8,9,10],3)); */
                                                   

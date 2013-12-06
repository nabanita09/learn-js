var nodeunit = require('nodeunit');
var arrays = require('../src/array-functions');

var arrEqual = function(a,b) {
	if(a.length == b.length){
		return true;
	}
	for(var i=0; i<=a.length; i++){
		if(a[i]!=b[i]){
			return false;
		}
	}
	return true;
}

exports['count'] = nodeunit.testCase({

'an empty array': function (test) {
		var isEven = function(n) {
			return (n%2) == 0;
		};

	 test.equal(arrays.count([], isEven), 0);
	 test.done();
},

'numeric arrays with predicate always returning true': function (test) {
		var alwaysTrue = function(n) {
			return true;
		};

	 test.equal(arrays.count([2, 4, 6, 8], alwaysTrue), 4);
	 test.done();
},

'numeric arrays with predicate always returning false': function (test) {
		var alwaysFalse = function(n) {
			return false;
		};

	 test.equal(arrays.count([2, 4, 6, 8], alwaysFalse), 0);
	 test.done();
},

'string arrays' : function(test) {
	var actual = arrays.count(["one", "two", "three"], function(e){
		return e.length <= 3;
	});

	test.equal(actual, 2)
	test.done();
}
});

/* Test Cases for Head Function */

exports['head'] = nodeunit.testCase({
'Head function should return first element of an array' : function(test) {
	test.equal(arrays.head([1,2,3,4]),1);
	test.done();
},
'Head function with an empty array should return undefined' : function(test) {
	test.equal(typeof (arrays.head([])),'undefined');
	test.done();
},
'head function for a string array should return the first string' : function(test) {
	test.equal(arrays.head(["one","two","three"]),"one");
	test.done();
}
});

/* Test Cases of init function */

exports['init'] = nodeunit.testCase({
'Init function should return all elements except the last one from an array' : function(test) {
	var result = arrays.init([1,2,3,4,5]);
	test.equal(arrEqual(result,[1,2,3,4]), true);
	test.done();
},

'Init function with empty array should return object' : function(test) {
	test.equal(typeof (arrays.init([])),'object');
	test.done();
},
'Init function with string array should return all the strings except the last one' : function (test) {
	var result = arrays.init(["nabanita","sarker","NS"]);
        test.equal(arrEqual(result,["nabanita","sarker"]), true);
        test.done();
}
});

/* Test Cases of Last function*/
exports['last'] = nodeunit.testCase({
'Last function should return last element of an array' : function(test) {
	test.equal(arrays.last([1,2,3,4,5]),5);
	test.done();
},

'last function with an empty array should return object' : function(test) {
	test.equal(typeof (arrays.last([])),'object');
	test.done();
},
'Last function should return last string from array of strings' : function(test)
{
	test.equal((arrays.last(["one","two","three"])),"three");
	test.done();
}
});

/* Test cases of Tail function */
exports['tail'] = nodeunit.testCase ({
'tail function with an empty array should return object' : function(test) {
	test.equal(typeof (arrays.tail([])),'object');
	test.done();
},

'tail function with an array should return all the array elements except the first one' : function(test) {
	var result = arrays.tail([1,2,3,4,5]);
	test.equal(arrEqual(result,[2,3,4,5]), true);
	test.done();
},
'tail function with a string array should return all the elements except the first one' : function(test) {
	var result = arrays.tail(["Red","Green","Yellow","Blue"]);
        test.equal(arrEqual(result,["Green","Yellow","Blue"]), true);
        test.done();
}
});


/* Test cases of distinct function */
exports['distinct'] = nodeunit.testCase ({
'distinct function with an empty array should return zero elements' : function(test) {
	var result = arrays.distinct([]);
	test.equal(result.length,0);
	test.done();
},
'distinct function with an array should not return repetitive elements' : function(test) {
	var result = arrays.distinct([1,2,1,2,3]);
	test.equal(arrEqual(result, [1, 2, 3]), true);
	test.done();
},
'distinct function with string array should not return repetitive elements' : function(test) {
        var result = arrays.distinct(["bye","bye"]);
        test.equal(arrEqual(result, ["bye"]), true);
        test.done();
}
});

/* Test cases of drop function */
exports['drop'] = nodeunit.testCase ({
'drop function with an empty array should return zero elements' : function(test) {
        var result = arrays.drop([]);
        test.equal(result.length, 0);
        test.done();
},
'drop function with an array should return all the elements except the first n ones' : function (test) {
        var result = arrays.dropRight([1,2,3,4,5],2);
        test.equal(arrEqual(result, [3,4,5]), true);
        test.done();
},
'drop function with an array of strings should return all the elements except the first n ones' : function (test) {
        var result = arrays.dropRight(["IND","AUS","US","UK"],2);
        test.equal(arrEqual(result, ["US","UK"]), true);
        test.done();
}
});


/* Test Cases for dropRight */
exports['dropRight'] = nodeunit.testCase ({
'dropright function with an empty array should return zero elements' : function(test) {
	var result = arrays.dropRight([]);
	test.equal(result.length, 0);
	test.done();
},
'dropright function with an array should return all the elements except the last n ones' : function (test) {
	var result = arrays.dropRight([1,2,3,4,5],2);
	test.equal(arrEqual(result, [1,2,3]), true);
	test.done();
},
'dropright function with an array of strings should return all the elements except the last n ones' : function (test) {
        var result = arrays.dropRight(["IND","AUS","US","UK"],2);
        test.equal(arrEqual(result, ["IND","AUS"]), true);
        test.done();
}
});

/* Test cases of dropWhile function */
exports['dropWhile'] = nodeunit.testCase ({
'an empty array' : function (test) {
	var isOdd = function(n){
        return (n%2)!=0;
	};
	var result = arrays.dropWhile([], isOdd);
	test.equal(result.length, 0);
	test.done();
},
'a proper array' : function (test) {
	var isOdd = function (n) {
	return (n%2)!=0;
	};
	var result = (arrays.dropWhile([1,2,3,4,5,6], isOdd));
	test.equal(arrEqual(result,[2,4,6]),true);
	test.done();
},
'dropwhile on an odd array should return an empty array' : function (test) {
	var isOdd = function (n) {
        return (n%2)!=0;
        };
        var result = (arrays.dropWhile([1,3,5,7], isOdd));
        test.equal(arrEqual(result,[]),true);
        test.done();
}
});

/* Test Cases for endsWith function */
exports['endsWith'] = nodeunit.testCase ({
'endsWith with a proper array' : function (test) {
	test.equal(arrays.endsWith([1,2,3,4,5],[3,4,5]),true);
	test.done();
},
'endsWith with an improper array' : function (test) {
	test.equal(arrays.endsWith([1,2,3,4,5],[2,4,5]),false);
	test.done();
},
'endsWith with empty array' : function (test) {
	test.equal(arrays.endsWith([],[]),true);
	test.done();
},
'endsWith with a proper string' : function (test) {
	test.equal(arrays.endsWith("Nabanita","nita"),true);
	test.done();
},
'endsWith with an improper string' : function (test) {
	test.equal(arrays.endsWith("Nabanita","Naba"),false);
	test.done();
} 
});

/* Test Cases for filter */
exports['filter'] = nodeunit.testCase ({
'filter an empty array' : function (test){
	var isEven = function(n){
        return (n%2) == 0;
	};
	var result = arrays.filter([],isEven);
	test.equal(result.length,0);
	test.done();
},
'filter an proper array' : function(test){
	var isEven = function(n){
        return (n%2) == 0;
        };
        var result = arrays.filter([1,2,3,4,5,6,7,8,9,10],isEven);
        test.equal(arrEqual(result,[2,4,6,8,10]),true);
        test.done();
},
'filter on an array of odd number should return an empty array' : function(test) {
	var isEven = function(n){
        return (n%2) == 0;
        };
        var result = arrays.filter([1,3,5,7,9],isEven);
        test.equal(arrEqual(result,[]),true);
        test.done();
}
});

/* Test cases for filternot */

exports['filterNot'] = nodeunit.testCase ({
'filternot on an empty array' : function (test){
	var isEven = function(n){
        	return (n%2) == 0
	};
	var result = arrays.filterNot([],isEven);
	test.equal(result.length,0);
	test.done();
},
'filternot on an array' : function (test) {
	var isEven = function(n){
        	return (n%2) == 0
        };
        var result = arrays.filterNot([1,2,3,4,5,6,7,8,9,10],isEven);
        test.equal(arrEqual(result,[1,3,5,7,9]),true);
        test.done();
},
'filternot on an array of even numbers' : function (test) {
	var isEven = function(n){
                return (n%2) == 0
        };
        var result = arrays.filterNot([2,4,6,8,10],isEven);
        test.equal(arrEqual(result,[]),true);
        test.done();
},
'filternot on an array of odd numbers' : function (test) {
	var isEven = function(n){
                return (n%2) == 0
        };
        var result = arrays.filterNot([1,3,5,7,9],isEven);
        test.equal(arrEqual(result,[1,3,5,7,9]),true);
        test.done();
}
});

/* TestCases for find */
exports['find'] = nodeunit.testCase ({
/*'filter on an empty array' : function (test) {
	var isEven = function(n){
        	return (n%2) == 0;
	}
	var result = arrays.find([],isEven);
	test.equal(result.length,0);
	test.done();
},*/
'filter on an array' : function (test) {
	var isEven = function(n){
                return (n%2) == 0;
        }
        var result = arrays.find([1,2,3,4,5,6,7,8,9,10],isEven);
        test.equal(arrEqual(result,[2]),true);
        test.done();
},
/* 'array with odd number should not match the predicate and also should return empty string' : function(test){
	var isEven = function(n){
                return (n%2) == 0;
        }
	var result = arrays.find([1,3,5,7,9],isEven);
	test.equal(arrEqual(result,[]),true);
	test.done();
}*/
});

/* TestCases for flatten */

exports['flatten'] = nodeunit.testCase ({
'flatten between two arrays' : function(test){
	var result = arrays.flatten([1,2,3],[1,2,3]);
	test.equal(arrEqual(result,[1,2,3,1,2,3]),true);
	test.done();
},
'flatten between two empty array' : function (test) {
	var result = arrays.flatten([],[]);
        test.equal(result,0);
        test.done();
},
'flatten for two string' : function (test) {
	var result = arrays.flatten(["one","two"],["three","four"]);
	test.equal(arrEqual(result,["one","two","three","four"]),true);
	test.done();
}
});

/* TestCases for union */

exports['union'] = nodeunit.testCase ({
'union between two arrays' : function(test){
        var result = arrays.union([1,2,3,4,5],[3,4,5,6,7,8]);
        test.equal(arrEqual(result,[1,2,3,4,5,3,4,5,6,7,8]),true);
        test.done();
},
'union between two empty array' : function (test) {
        var result = arrays.union([],[]);
        test.equal(result,0);
        test.done();
}
});

/* TestCases for zip */

exports['zip'] = nodeunit.testCase ({
'zip between two arrays should return a zipped array' : function(test){
	var result = arrays.zip([1,2,3,4,5],[5,4,3,2,1]);
	test.equal(arrEqual(result,[[1,5],[2,4],[3,3],[4,2],[5,1]]),true);
	test.done();
},
'zip between one numeric and one string array' : function (test){
	var result = arrays.zip([1,2,3,4,5],['a','b','c','d','e']);
        test.equal(arrEqual(result,[[1,'a'],[2,'b'],[3,'c'],[4,'d'],[5,'e']]),true);
        test.done();
},
'zip two empty array' : function (test){
	var result = arrays.zip([],[]);
        test.equal(arrEqual(result.length,0),true);
        test.done();
}
});

exports['zipWithIndex'] = nodeunit.testCase ({
'zipwithindex for array of strings' : function (test){
	var result = arrays.zipWithIndex(["a","b","c"]);
	test.equal(arrEqual(result,[["a",0],["b",1],["c",2]]),true);
	test.done();
},
'zipwithindex for empty array' : function (test){
	var result = arrays.zipWithIndex([]);
        test.equal(arrEqual(result.length,0),true);
        test.done();
},
'zipwithindex for array of numbers' : function (test){
	var result = arrays.zipWithIndex([1,2,3]);
        test.equal(arrEqual(result,[[1,0],[2,1],[3,2]]),true);
        test.done();
}
});

var nodeunit = require('nodeunit');
var arrays = require('../src/array-functions');

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
'Head function with empty array should return undefined' : function(test) {
	test.equal(typeof (arrays.head([])),'undefined');
	test.done();
},
'String array should return first string' : function(test) {
	test.equal(arrays.head(["one","two","three"]),"one");
	test.done();
}
});

/* Test Cases of init function */

exports['init'] = nodeunit.testCase({
/*'Init function should return all elements except the last one from an array' : function(test) {
	test.equal(arrays.init([1,2,3,4,5]), [1,2,3,4]);
	test.done();
},*/

'Init function with empty array should return undefined' : function(test) {
	test.equal(typeof (arrays.init([])),'object');
	test.done();
}
});

/* Test Cases of Last function*/
exports['last'] = nodeunit.testCase({
'Last function should return last element of an array' : function(test) {
	test.equal(arrays.last([1,2,3,4,5]),5);
	test.done();
},

'last function with an empty array' : function(test) {
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
'tail function with an empty array' : function(test) {
	test.equal(typeof (arrays.tail([])),'object');
	test.done();
}
});



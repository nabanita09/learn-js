#!/usr/local/bin/node

var each = function(arr,func){

	var i;
	for(i=0;i<arr.length;i++){
		func(arr[i]);
		}
	}
	
	var arr = [1,2,3,4]
	var fun = function(e)
	{
		console.log(e);
	}
	console.log(each(arr,fun));

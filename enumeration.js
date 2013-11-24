#!/usr/local/bin/node
var person = {"name":"Nabanita", "age":"26","designation":"Software Engg"};
var i;
for(i in person)
	{
		console.log(i+" "+"is"+" "+person[i]);	
	}	 

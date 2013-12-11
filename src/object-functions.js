#!/usr/bin/node

exports.Values = function(obj){
        var i;
        var a = [];
        for (i in obj){
                a.push(obj[i]);
        }
        return a;
}

var Keys = function(obj){
        var i;
        var a = [];
        for (i in obj){
                console.log(i);
                a.push[(i)];
        }
        return a;
}
var object = new Keys({one:1,two:2,three:3});
console.log(Keys(object));

var Pairs = function(obj){
        var i;
        var a = [];
        for (i in obj){
                //console.log(i + "," + obj[i]);
                a.push([[i] + "," + obj[i]]);
        }
        return a;
}
var object = new Pairs({one:1,two:2,three:3});
console.log(Pairs(object));




#!/usr/bin/node

exports.Values = function(obj){
        var i;
        var a = [];
        for (i in obj){
                a.push(obj[i]);
        }
        return a;
}




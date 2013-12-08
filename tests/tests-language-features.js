#!/usr/local/bin/node

/*enumeration */
var person = {"name":"Nabanita", "age":"26","designation":"Software Engg"};
var i;
for(i in person)
        {
                console.log(i+" "+"is"+" "+person[i]);        
        } 

/*function literal */

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

/* literals */

var employee = {"name":"John","emp_id":1234,"designation":"Senior Software Engg "};
console.log("Initial Data for employee:")
console.log(employee);

console.log("Name is:" + employee.name);
console.log("Designation is:" + employee["designation"]);
console.log("Emp Id is:");
console.log(employee.emp_id=4321);
console.log("Location is:");
console.log(employee.location="India");

console.log("Updated Data for employee:")
console.log(employee);

/* reflection */

var person = {"name":"John","age":"30","location":"UK"};

console.log(typeof(person));
console.log(typeof(person.name));
console.log(person.toString());
console.log(typeof(person.toString));

/* test */

console.log("Hello World");

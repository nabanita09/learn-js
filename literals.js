#!/usr/local/bin/node

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

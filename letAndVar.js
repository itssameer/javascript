// difference between var and le

/* var is function scoped and globelly accessed thoughout the script
where as the let, it is the block scoped. */

//Example
console.log(_var);

var _var = 20;

console.log(_var);

/*OUTPUT: 
Undefined
20
*/

//EXAMPLE FOR LET

/*
console.log(_let);

let _let = 20;

console.log(_let);

OUTPUT:
Error:cannot access before initialization
*/

/********************************************************************
FUNCTIONS AND FUNCTION EXPRESSTIONS
/********************************************************************
 
Normal functions declaration is loaded into compiler when the function call is encountered.

*/

// alert(foo());

// function foo() {
//   return "this is normal function";
// }

//Function expressions on the other hand it will be loaded into compiler when the interpreter encountres the line of code

//EXAMPLE

// The below example will through an error because the var is used before declaration

/* 

alert(foo());
var foo = function() {
  return "this is function expression example";
};

ERROR: foo is not a function
*/

/* Advantages of function expressions
1. it can be used as IIF
2. can be used as agrs to other functions.
*/

/************************************
 * Arrays
 */

var names = ["Jony", "Rony"];
var years = new Array(1995, 1993);

names.push("John"); // adds John at the end of the array
names.unshift("Lilly"); // adds Lilly at the begining of the array

names.pop(); // removes item from the end
names.shift(); // removes item form the beginig

console.log(names);

/**********************************
 * Objects
 */

var john = {
  firstName: "john",
  lastName: "Bhol",
  dbo: 1990,
  family: ["jane", "mark", "bob"],
  job: "manager"
};

console.log(john);

console.log(john.firstName);
console.log(john["lastName"]);

//creating object using Object method

var jane = new Object();
jane.firstName = "jane";
console.log(jane);

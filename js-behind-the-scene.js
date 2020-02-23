/***************************
 * Hoisting
 */

//1. code is scanned for functions declarations to hoist.
//2. code is scanned for variables and sets it undefined.
// And these above are avaiable before code is executed.

//EXAMPLE:

calculateAge(1993); // calling function before its declarations

function calculateAge(year) {
  console.log(2020 - year);
}

//OUTPUT: 27

/**************************
 * Scoping and the Scoping chain
 * Each new function creates a scope. if , for .. don't create scopes
 * Lexical scoping: a function that is lexically within another function gets access to the scope of the outer function.
 */

var a = "Hello";
first();

function first() {
  var b = "hey";
  second();
  function second() {
    var c = "hi";
    console.log(a + b + c);
    third();
  }
}

function third() {
  var d = "john";
  //console.log(a + b + c + d); execution stack is different than a scope chain.
  //it doesn't matter third is called from second() function. and b or c is not accessble to third()
  console.log(a + d);
}

/***********************************
 * 'this' Key word.
 */
// console.log(this); // this -> pointing to window object (Default)

calculateAge(1993); // regular fun call also point 'this' key word to window obj

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}

var john = {
  name: "John",
  yearOfBirth: 1993,
  calcAge: function() {
    console.log(this);
    function innerfun() {
      console.log(this);
    }
    innerfun(); // this -> will point to window object (reqular fun call)
  }
};

john.calcAge(); // this -> is now point to john object

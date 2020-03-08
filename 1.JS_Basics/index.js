console.log('Hello World!!')

/********************************
 * javascript is a lightweight, cross-platform, object oriented language.
 * 
 * Javascript is used for both front end and back end as well.
 */

 //Variables..

// let vs var vs const 

//let is block scop, var is function scop, const is to declare constants that can not be changed or reassigned value.

// var is hoisted but const and let variables are not hoisted.

// Javascript is dynamic typed.

/****************************
 * Functions
 

 //Normal functions
// these are hoisted
 function fun_nam(param){
     //TODO something
     return something;
 }

*/

// functions statements.active
// These are not Hoisted
var var_name = function(param){
    //TODO
    return something
}


// Arrays

var names = ['sam', 'ram','satya'] // method 1
var year = new Array(1990,1991,1989) // method 2

console.log(names[0]);


// Common array methods

names.push('value') // O(1)
names.pop() //O(1)
names.shift() //O(N) delete at teh beginning
names.unshift('value')//O(N) add at the beginning
/**************............
 * JS runs on V8 engine designed by Google in chrome browser
 *  
 */

 // Execution context and execution stack
 /**
  * Global execution context
  * it is the default context. code which are not in any function context.
  * in browser global execution context refers to the window object.
  * 
  * 
  * it is basically a stack of function calls.
  * first is always global context.
  * then the series of function calls .
  * ******Creation Phase *********
  * *****************************
  * |     Variable Objects     |
  * |       Scope chain        |
  * |      this variable       |
  * *****************************
  * 
  * //Variable Object
  1 The argument object is created, containing all the argument that were passed into function.
  2 The all the functions and variables are Hoised i.e
   a Code is scanned for function declaration. for each function a object is created in a VariableObject and pointed to the function.
   b Code is scanned for variable declaration and set it to undefined.(using var keyword)
   
  */

  //Hoising Example.
/**************
 function hoisting:
 Applicable only for Function declaration not for function statements.

 variable declaration:
 Applicable only for variable declared using var keyword not with let or const.
 */

 //Example

// we can call sum before even we declare it.
console.log(sum(1,2)); // 3

 function sum(a,b){
     return a+b;
 }


 var total = function sum(a,b){
     return a+b;
 }

 // this function statement is not hoisted so we have to declare the statement first then call the function
 console.log(total(1,2));
 
 //Variables
console.log(name); //Undefined

 var name ='sameer'

 //console.log(letName); // Error
 
 let letName = 'Sameer'

 //The 'this' Keyword.
/*
1. Regular function call will point the 'this' to global object or window object.
2. In method call the 'this' points to the Object that  is calling the method
*/

//Example

function sum(a,b){
    // console.log(this); //Global
    (function negate(){
        console.log('inside negate' + this)//
    })()
    return a+b;
}

// sum(1,2)

// Method calling
var john = {
    firstname:'sameer',
    YOB:1993,
    age:function(){
        console.log(this);
        
        console.log(2020 - this.YOB)
    }
}

var jane = {
    firstname:'jane',
    YOB:1994
}

jane.age = john.age;

jane.age()
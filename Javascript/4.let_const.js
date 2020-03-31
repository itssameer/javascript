/***************************************************
 * ES 5 and older uses var to define variables.
 * All variables defined using var keywords are Hoisted. (That is the reason we get classic 'undefined' error if we use it before assigning the values.)
 * These variables are blocked scoped. 
 * 
 * ES 6 we use let and const key words to define variables.
 * These variables are not hoisted and any error can be caught at compile time.
 * These variables are Function scoped.
 * 
 * Blocks are not just restricted for if and while for.. you can create block just using { } and it will create a block.

*/

//Example:ES5

function varExample(pass){
    if(pass){
        var name = 'Sameer';
        var Age = 26
    }
    
    console.log(name + ' : ' + Age);
}
varExample(true)

//Example: ES6

function letExamle(pass){
    if(pass){
        const name = 'Sameer'
        let age = '26'
    }
    console.log(`${name} : ${age}`)
}

//letExamle(true) // Error because let and const are blocked scope so it is not accessed outside if block.

//TIP: we can modify objects which are declared using cost keyword..
//Cost is to restrict resigning. we can modify objects. 
//Ex:

const Person = {
    name : 'Sameer',
    age : 26
}
console.log(Person.age);

Person.age = 27
console.log(Person.age);
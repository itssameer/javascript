/***************************************
 * As they say everything is object except primitive Data types.
 */

 var Person = function(name, year, job){
     this.name = name;
     this.year = year;
     this.job = job;
 };

 
 //Now lets use the inheritence to add some methods that can be used by all the Person instances
 //now calcAge is abstracted from Person object.
 Person.prototype.calcAge = function(){
     console.log(2020 - this.year)
    }
    
    var jane= new Person('jane',1980,'Manager')
    var john = new Person('john',1993,'SE')
    
    jane.calcAge();
    john.calcAge();
    console.log(john)


    /********************************************
     * Primitive and objects
     */

// Primitive variables sotre the values wher as objects store the reference to the memory

var a = 23;
var b = a;
var a = 46

console.log(a) 
console.log(b);
// OUTPUT: 46 23, 

var a ={
    name:'John',
    age:'26'
}
var b = a;
a.age = 46;

console.log(a);
console.log(b);

//First class functions

var ages = [23,19,15,25];

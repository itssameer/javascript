/************
 * inheritance can be done through prototype.
 * prototype is present in every object in js
 */

 //ex:
 var john = {
     name:'John',
     yob:1993,
     job:'teacher'
 }

 //creating a function constructor

 var Person = function(name,yob,job){
     this.name = name;
     this.yob = yob;
     this.job = job;
 }

 //Creating the prototype
 Person.prototype.calcAge= function(){
    console.log(2020 - this.yob)
 }

 var john =  new Person('john',1993,'teacher')

 john.calcAge()

 var jane = new Person('Jane',1991, 'Doctor')
 jane.calcAge()
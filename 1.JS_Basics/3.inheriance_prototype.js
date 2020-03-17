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

 //Creating object using Object.create

var personProto = {
    calcAge:function(){
        console.log(2020 - this.yob)
    }
}

var johnObj = Object.create(personProto)
johnObj.name = 'John'
johnObj.yob = 1993
/********************
 * OR
 * you can create like this
 * var johnObj = Object.create(personProto,{
 * name:{value: 'John'},
 * yob:{value: 1993}
 * })
 */


console.log(johnObj);

johnObj.calcAge()



/************Primitive and not primitive datatype: ******
 * primitive datatype hold real value in the address
 * variables associated with objects holds references in the address
*/

//Ex:

var a= 12;
var b = a;
console.log(a,b);
a = 13;
console.log(a,b);

var a = {
    name:'sam',
    age:26
}

var b = a;
console.log(a,b);
a.age = 30;
console.log(a,b);

//call-back functions
//Function which are sent as an argument to the function and called later inside the function to which it is passed

var arr = [1991,2002,1993,1994,1995]

function arryCalc(arr,fn){
    var arrRes = []
    for(var i = 0; i<arr.length; i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes
}

function calcAge(num){
    return 2020 - num
}


function fullAge(num){
    return num>18
}
var ages = arryCalc(arr,calcAge)
var eligible = arryCalc(ages,fullAge)

console.log(eligible);

console.log(ages);
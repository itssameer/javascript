const Years = [1993,1995,1991,1990]

const ages = Years.map( (el, index) => `${index + 1} : ${2020 - el}`)

// console.log(ages);


//Arrow functions don't have 'this' keyword. the arrow function uses 'this' keyword in which they are written in.
//ie., they have the Lexical 'this' keyword. 'this' belongs to the surrounding  function/object in which arrow function is defined.

//EX: ES5

var obj5 = {
    name:'Sameer',
    age:26,
    showDetails: function(){
        return function(){
            return myDetails = `Hi! My name is ${this.name} and i'm ${this.age} old`
        }
    }
}
// console.log(obj5.showDetails()()) // OP: Hi! My name is undefined and i'm undefined old

//Work-around.

var obj51 = {
    name:'Sameer',
    age:26,
    showDetails: function(){
        var self = this
        return function(){
            return myDetails = `Hi! My name is ${self.name} and i'm ${self.age} old`
        }
    }
}
// console.log(obj51.showDetails()())

//Arrow functions are ill suited for Methods.

var obj6 = {
    name:'Sameer',
    age:26,
    showDetails: function(){
        return () =>{
            return myDetails = `Hi! My name is ${this.name} and i'm ${this.age} old`
        }
    }
}
// console.log(obj6.showDetails()()) //OP : Hi! My name is Sameer and i'm 26 old


//Twist:
var obj61 = {
    name:'Sameer',
    age:26,
    showDetails: ()=>{
        return () =>{
            return myDetails = `Hi! My name is ${this.name} and i'm ${this.age} old and 'this' keyword poining to ${this}`
        }
    }
}
// console.log(obj61.showDetails()()) //OP : Hi! My name is undefined and i'm undefined old
// Now the showDetails 'this' variable points to the surrounding that is window obj(in browser) {Objet}(in NodeJs)

//----------------------------------------------------------------------------------------------------------
//ES5 for accessing prototype methods.

function Person5(name){
    this.name = name;
}

Person5.prototype.friends = function(arr){
    var friendsArr = arr.map(function(friend){
        return `${this.name} is friends with ${friend}`
    }.bind(this))
    console.log(friendsArr)
}

// new Person5('Sameer').friends(['a','b','c'])

//ES6 for accessing prototype methods.

function Person6(name){
    this.name = name;
}

Person6.prototype.friends = function(arr){
    var friendsArr = arr.map((friend) =>{
        return `${this.name} is friends with ${friend}`
    })
    console.log(friendsArr)
}

// new Person6('Sameer').friends(['d','e','f'])


//----------------------------------------------------------------------------
//Destructing..

var arr = ['John', 26]
var name, age
[name,age] = arr // for array oder is important and for object var names should be same as keyname inthe object

console.log(name);
console.log(age);

const objects = {
    name:'Sameer',
    age:30
}

const {name , age} = objects // Name of the variables should be same as keys names in objects.
const{name: myName, age: myAge} = objects //Now variables assigned to myName and MyAge.

//Classes are not hosed and these are just syntactic sugar coat for functions.

class Person {
    constructor(name, yob,job){ //This constructor is Mandatory for every class
        this.name = name;
        this.yob = yob;
        this.job = job;
    }

    calAge(){
        let age = 2020 - this.yob;
        return age
        
    }
    static greetings(){ // This method is not inherited by instances..
        console.log('Hello World!')
    }

}

let sam = new Person('sam',1993,'SE')
console.log(sam.calAge())

//Inheritance 

//ES5:
function Person5(name,yob){
    this.name = name;
    this.yob = yob;
}

Person5.prototype.calAge = function(){
    console.log(2020 - this.yob)
}

var athlete = function (name,yob,sport, medals){
    Person5.call(this,name,yob)
    this.sport = sport;
    this.medals = medals;
}

athlete.prototype = Object.create(Person5.prototype) //prototype function should be created before create athlete prototype.

athlete.prototype.medalsWon = function(){
    return ++this.medals;
}
var sam55 = new athlete('sam',1993,'cricket',5)
sam55.calAge()
console.log(sam55.medalsWon());

//ES6

class athlete6 extends Person {
    constructor(name,yob,job,sport,medals){
        super(name,yob,job)
        this.sport = sport
        this.medals = medals
    }

    medalsWon(){
        console.log(++this.medals);
        
    }
}

let sam6 = new athlete6('sam',1993,'dfjk','cricket',5)
console.log(sam6.calAge())
sam6.medalsWon()
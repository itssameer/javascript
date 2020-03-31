//In ES5 we use Array.prototype.slice.call(list)
//is used for converting to an arry.

//In ES6 we simply use Array.from(list) to convert the list into Array

//Ex: Array.from(DomList).forEach(cur =>{})
/****************************************************** 
//New for loop to loop though all arry items.

arr = [1,2,3,4]

for(let i =0; i<arr.length;i++){
    console.log(arr[i]);
    
}

for(let i of arr){
    console.log(i);
    
}
*/
/*************************************************
 * findIndex(func) - to find index
 * find(func) - to find element
 */

 //Spread Operator
//This operator is used for spreading array to pass different parameters to the functions.
//Ex:

function addFourNumbers(a,b,c,d){
    console.log(`${a+b+c+d}`);
    
}

//ES5: We use Apply method
addFourNumbers.apply(null,[1,2,3,4])
//ES6: Using Spread Operator.
addFourNumbers(...[1,2,3,4])
//Spread Op. can also be used to join to Arrays.
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const arr3 = [...arr1,...arr2]
console.log(arr3);


//REST Parameters :
//these is opposite of the Spread operator.
//This will create an Array from the separate parameters passed to a function.

function restTest(...args){98
    console.log(args)
}

// restTest(1,2,3,4) // OP: [1,2,3,4]

//Default parameters
function defaultParams(firstName,lastName,age= 18,nationality = 'Indian'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = nationality;
}

let sameer = new defaultParams('Sameer','Mohiuddin')
// console.log(sameer);


//--------------------------------------------------
//Maps(Hash Maps)
//Same as object but n Maps keys can be anything like numbers boolean.

const question = new Map();
question.set('Question', 'What is the Author name of this Repository');
question.set(1,'Sam');
question.set(2,'Dam');
question.set('Ans',1);
question.set(true,'You are right!');
question.set(false,'You can get it right this time');
console.log(question.get('Question'));
console.log(question.size);
//ES5
question.forEach((value,key)=>{
    if(typeof(key) === 'number'){
    console.log(`this is the key '${key}' and value is '${value}'`); }
})

//ES6
for(let [key,val] of question.entries()){
    if(typeof(key) === 'number'){
    console.log(`this is the key '${key}' and value is '${val}'`); }
}

//advanced objects
//primitive types are the built in objects and functions

//reference types are created by the programmer
var object1 = { value:10};// let obj = {<--sets scope Key :<--colon closes key Value ,<--comma closes the value }
var object2 = object1;//this references object1 so it is equal to object1
var object3 = {value:10};//this would be false because it is its own value.


//[]===[] will not be equal as well 


//context, often confused with "scope" which is created wherever curly brackets are
const bee = () =>{
	let a = 4;
}; /// this is an example of "scope". as you can see a was created inside of the function

//context tells us where we are within the object
const object4 = {
	a: function (){ 
	// arrow functions will return the window object
	//so only declaring a function like this will return the object
		console.log(this)// will return "a"
	}
	
}

console.log(this); //will return window object

//instantuation: making "instances" or multiple copies 
//tricky syntax warning!!!

class Player{
	constructor(name,type){//built in function.
		this.name = name;
		this.type = type;
		console.log('player',this)
		}
	introduce(){
		console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
		}
	}
class Assassin extends Player {
	constructor(name,type){
		super(name,type)
		// console.log('assassin',this)
		}
	play(){
		console.log(`i have chosen the life of a ${this.type}`);
		}
	}
const billy = new Player('Bill','Debt Collector')
const assassin1 = new Assassin('Jacobi','Hit Man');
const assassin2 = new Assassin('Jennifer','Ninja');
const assassin3 = new Assassin('Raul', 'Sicario')


// Yeeeeeah, imma have to study up on this

// pass by value means we copy a value and create that value someowhere else 
//variables pass by value
var a = 5;//stores 5 as the value
var b = a;//stores 5 as well;

b++;//only updates b even though it references a

// will return a = 5 and b = 6

let obj1 = { name:'Bob', password:'123'};
let obj2 = obj1;
obj1.password = 'lemonSqueeze';
//pass by reference means that it references the address instead of the value
// so when the value is changed through the reference it goes and changes the original value

//great for control
//can be potentially bad if someone goes in and changes a value
//objects are passed by reference
console.log(obj1.password);
console.log(obj2.password);

var cee = [1,2,3,4,5,6]
//var dee = cee;
// passes by reference, because an array is an object

var dee = [].concat(cee);//pushes whatever is in cee into dee. 


dee.push(1838922834493);
console.log(cee);//notice the original value is untouched
console.log(dee); //dee is populated with all the stuff.

let objizzle = {a: 'a', b:'b', c:'c'}

//let anotherObj = objizzle will return pass by reference.
let clonizzle = Object.assign({},objizzle);//research Object.assign();
//Object.assign(target<--where's it going , object<--whats going in it);
//Object.assign copies all enumerable own properties from one or more source objects
//to a target object. it returns the modified target object.
let cloneezy = {...objizzle};
console.log(cloneezy);
console.log(objizzle);
console.log(clonizzle);
objizzle.c = 3;//will chanvge the original array and leave the clone untouched

console.log(objizzle);
console.log(cloneezy);

//type coersion means when the things to the left and right of the operater are two different types

 console.log(1 == '1');//will read true because they both are 1 but one is a number and the other is a string
//essentially Javascript forces one of the values into a different type

//using the strict equality === operator will keep this from happeneing.

console.log(1==='1'); //will return false and keeps everything inline mostly. 
console.log (-0 === +0); // will return true even though there is a difference
console.log(Object.is(-0,+0)); // the strictest way to return a boolean;

//es7 tricks n shit, only 2 additions

//.includes(); method for strings and arrays

console.log('bitch'.includes('itch')); //returns true
let animals = ['cat','dog','lemur'];
console.log(animals.includes('lemur'))//returns true. lemur is present
console.log(animals.includes('lizard')) // returns false because there is no lizard

//es8; a
//.padStart(); adds padding to the beginning
//.padEnd(); adds padding at the end

const fun = (a,b,c,d,) => {//the last arg carries a comma. it no longer errors
	console.log(b);
}
fun('cow','Cat',1,3);

Object.values;
Object.entries;
Object.keys;

let objekt = {
	username:'santa',
	username1:'rudolf',
	username2:'Krampus'
}

Object.keys(objekt).forEach((key,index)=>{
	console.log(key,objekt[key])
})//returns the names and values. 
Object.values(objekt).forEach(value=>{
	console.log(value)
})//returns the values of the array
Object.entries(objekt).forEach(value =>{
	console.log(value)
})//returns an array

Object.entries(objekt).map(value=>{
	return value[1] + value[0].replace('username', '');
})


//.flat() is for flattening out nested arrays
//.flat(3) specifies the number of levels to flatten. this will flatten 4 levels
//.flat(Infinity); will flatten through all arrays.

//.flatMap(); will flatten the array and do a function to it.
const arrayOfStuff = [1,2,3,[[[33]],[22]],[3],[[[[4]]]]];
const popWith1 = arrayOfStuff.flatMap(numAdder => numAdder + "22");
console.log(popWith1);//populates by adding 22 to the numbers.

//trimStart and trimEnd gets rid of white space before or after the string

const userEmail = '            jonDoe@gmail.com';
const userEmail2 = 'jonDiggity@gmail.com     ';

console.log(userEmail.trimStart())//clears the whitespace at beginning of string
console.log(userEmail2.trimEnd())//clears the whitespace at end of string

//Object.fromEntries does the opposit from Object.entries
//it coppies the array to an object and categorizes it;

const userProfiles = [['Johnny',23],['Billy', 34],['Jeff', 28]]

const bttrProfiles = Object.fromEntries(userProfiles)
console.log(bttrProfiles);

//try catch block is for bug testing. it trys a code and does something on error

try{
crazy++
}catch{
console.log('you did it wrong')
}

try{
henry + jim
}catch(error){// the old way of doing things actually returns the error
	console.log('you messed up: ' + error);
}

//advanced loops

const basket = ['apples','oranges','grapes'];

for(let i=0; i < basket.length; i++){
	console.log('for loop',basket[i]);
};

basket.forEach(item =>{
	console.log('forEach',item);
});

//for of is for iterable objects.
//strings and arrays are iterable. this only works on strings and arrays

for (let fruit of basket){
	console.log('for of', fruit);
}
const superBasket = {
		'apples': 5,
		'oranges':6,
		'grapes':1000,
}
//for in works on objects and "enumerable" items
//objects are enumerable
for (let fruit in superBasket){
console.log('for in', fruit);
}


//ES 2020
//BigInt

// look up "MAX_SAFE_INTEGER"
// number functions have a maximum number which can be used effectively
//anything over that should be defined as a 'bigInt'
//you can define a bigInt by typing n after the number, like 1n.
console.log(Number.MAX_SAFE_INTEGER);

let x=9007199254740991
let xx = 9007199254740991n
let y = 20;

console.log('without bigInt', x+10) //this is enough to make this number function break
console.log('with bigInt',xx+10n)//this returns an accurate value


//optional chaining operator 
//alot like a ternery statement. utilized the ? to check for conditions
// 

let myPokemon = {
	picachu:{
		species:'Mouse Pokemon',
		height: 0.4,
		weight: 6,
		power:'lightning'
	}
}
let yourPokemon = {
	raichu:{
		species:'Mouse Pokemon',
		height:0.8,
		weight:30,	
		power: ''}
}

let weight=myPokemon.picachu.weight;
console.log(weight);
//let weight3=myPokemon.raichu.weight; will error out without an if statement

// this if statement is what you have to do to be undefined.

if (yourPokemon.picachu && yourPokemon.picachu.weight){
	let weight2 = yourPokemon.picachu.weight;
}else{
	let weight2 = undefined
	console.log(weight2)
}
let weight3 = myPokemon?.picachu?.weight;
console.log(weight3)

// to check for properties use the naolish operator with is the "or" operator at the end of the staemnt
let power = yourPokemon?.picachu?.power || 'no power';



console.log('No power.');


//replace

const str = "nineisten is the best of the absolute best";

console.log(str.replaceAll('best','greatest')); //checks for all instances
console.log(str.replace('best','greatest'))// only checks for the first instance


//debugging


//debugger;

//synchronis vs asyncronis
//synchronis means you can only process one thing at a time.


//asyncronis handles processes separately
console.log('1');// processes

setTimeout(()=>{//begins to process but wont return until the timer finishes
	console.log('2');
},0)
console.log('3');

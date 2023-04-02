//excersize. My solution
// const list = document.querySelector('.output ul');
// const totalBox = document.querySelector('.output p');
// let total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';
// const products = [
//                 'Underpants:6.99',
//                 'Socks:5.99',
//                 'T-shirt:14.99',
//                 'Trousers:31.99',
//                 'Shoes:23.99'];

// 	for (let product of products){
// 	let [name,price] = product.split(':');
// 	price = parseFloat(price);
// 	total += price;
// 	const itemText = `${name} – $${price}`;



//   const listItem = document.createElement('li');
//   listItem.textContent = itemText;
//   list.appendChild(listItem);

// }

//totalBox.textContent = 'Total: $' + total.toFixed(2);






//arrays consist of sqare brackets and items that are separated by commans
// syntax ex: const array = [1,'two',true] <-can be populated with numbers strings and boleans
//


//Advanced Arrays


//functions and methods for arrays 


//!!forEach!!

 const arry = [1,2,3,4,5];


 const newArray = arry.forEach((n) => n * 3);

console.log(newArray);

//this only identifies the items in the array. it does not store or copy anthing

//in order to accomplish running the function AND storing the values into an aray you have to do something like :


const theArray = [1,2,3,4,5];// <---- create the array with the numbers we want to calculate
const triple = [];// <--- create empty array

	const anArray = theArray.forEach((num) => {
		triple.push(num * 3)});// <---- copies the mulitiplied values to the array

console.log('ForEach pushing to empty array',triple); //<---- calls the function returning the multiplied number


//there is a better way of doing this with the .map() function. 


const mapArray = theArray.map((num) => {//<---- creates a variable that stores the values from a function on an array
	
		return num * 2 ;
})

console.log('Map Array function',mapArray); //<----- returns the newly "mapped" array

//keep things acting in an expected way.

//when you have a simple return you can strip the statement down, like so

//filter

const filterArray = theArray.filter(num => num === 5); //<----- runs a function only on specified items in an array 

//reduce
const reduceArray = theArray.reduce((accumulator, num)=>{
	return accumulator + num	
}, 0 )//<--- starting value 

console.log('reduce', reduceArray); //prints the results from reduce function
//this is an array containing a small grocery list
const shop = ['milk','cheese','eggs','bread','sugar'];

const shopLog = shop;
console.log(shopLog);
console.log('list:', shop);//this will print the list in the console

console.log('Access by Index:', shop[4]); //should return sugar
shop[4] = 'Raw Sugar'; //replace item by index
console.log('Replace by index:',shop[4]);


//since arrays can store all data types we will make one mixing them
const mixy = ['Hat', 200, true, [1,'Apple',false]]; //note the interior brackets that nests a child array
console.log('mixed array with nested items:',mixy);


// you can use .legnth to find how many items are in an array similar to characters in a string
console.log('How Many:',shop.length);//start spelling LENGTH correctly, PLEASE!!!

//accessing and modifying array items

//the square brackets directly to the right of the array are how you access the items
console.log('access an item:',mixy[0]);//they are "indexed" by number. 0 is the 1st item in the index.


//Items Nested inside an item in an array are called multidemensional items
// each tier in the array is accessed through each subsequent bracket
//this specific layout selects the second item nested in the fourth item in the array
// this should log "Apple" if done correctly
console.log('Multidemensional array access:',mixy[3][1]); 

//note: you must be careful in calling the right item in the index
//example. this statement will return the first letter of the string selected in the array
// so if you didnt mean to log the letter H then you have an issue.
console.log('Selects String Character:', mixy[0][0])

//second tier will return the second "p" from apple
console.log('Second level string access',mixy[3][1][2])

//additionally this returns undefined as the first item selected is a number. 
//apparently only the string value will be returned in this fashion
console.log('Throws Undefined:',mixy[1][0]);
console.log('Logs the Number:',mixy[1]);//the only way to call a number

// this is undefined for the same reason a number would be
console.log('booleans broken:', mixy[2][2]);

//returns false
console.log('booleans:',mixy[3][2])


//if you want to find the index numnber of an item you used the .indexOf(); method
console.log("Find Index:", mixy.indexOf(true));
console.log('Find Index:', mixy.indexOf(200));
console.log('FInd Index:',mixy.indexOf('Hat'));

// if .indexOf(); cant find the specified item, it will return -1
console.log('Item Not found:', mixy.indexOf('Apple'));

//Entering into the second tier then looking for the word was suceessful
console.log('find Index Tier 2:', mixy[3].indexOf('Apple'));

//adding items
mixy.push('Cows',34, true);
console.log('With Added Items:',mixy);

//adding items to the second tier
mixy[3].push('Eat',40000,false);
console.log(mixy);

//storing added items


//stores list in the array
const myArray = ['eat', 'drink', 'talk', 'play']
//pushes item onto original list and stores the legnth
const newLeng = myArray.push('drink', 'talk');//.push(''); stores at the end of the list
console.log('item length:',newLeng);
console.log('New End Items:',myArray);

//add items to the top or beginning of the array with .unshift();
myArray.unshift( 'work', 'smoke', 'chill', 'vibrate') ; 
console.log('Add to front:',myArray);

//remove the last item from the array
myArray.pop();
console.log('Erase from end:',myArray);

//remove the first item from the array
myArray.shift();
console.log('remove from start:',myArray);

//if you know the index of an item you can remove it using .splice();
//the first argument selects the index the second 
//the second argument says how many are to be added/removed and the third tells what to add
myArray.splice(2,2,'breath','excersize')
console.log('replace items:',myArray);

//finds the index value of an item using .indexOf
//we went ahead and wrote a function where we can find the value of arg.
const index = (item) => myArray.indexOf(item);

//using the functions returned value we check to see if the item queried is present
//index('...') !== 1 is saying that as long as the index isnt -1 then proceed.
//An indexOf Value which equals -1 means its not present
if(index('smoke')!== -1) {
	//if conditions are met then replace smoke and 1 subsequent item with the two listed
	myArray.splice(index('smoke'),2,'vibrate','work',);
}
console.log('replace items with cond:',myArray);

//checking to see if multiple values return for duplicate items. they do not.
console.log('index value:',index('drink'));

const devices = ['Phone', 'Computer', 'tablet', 'radio', 'watch', 'television'];
for(const device of devices){
	console.log('Add ! to all:',device+'!');
};

//create a function to execute the desired task
const addOneTo = (num) => num + 1;

//create an array of numbers
const numbers = [1,2,3,4,5,10]

// use this variable to store the product of the operation using .map()
//this runs the function on all the items in the array and stores them in the the new array
const added = numbers.map(addOneTo);
console.log('Added plus one:',added);

// .filter(); is how you filter through the array to return certain items
// this particular function says return items whos length is greater than 8
const isLong = (city)=> city.length > 8;

//create an array 
const cities = ['Atlanta', 'New York', 'Amsterdam', 'Los Angeles'];

//insert the function as a argument in the .filter() method.
const longer = cities.filter(isLong);
console.log('filtered cities:',longer);

// create an array with one string
//const myData = ['this,that,the other,Nothing']; <--this will error
const myData = 'this,that,the other,Nothing';

const bobIsMe = (element) => typeof element;

//was having trouble with the instructions. so i had to check the typeof
// when i did that i realised that i put the string in an array which is an object
//.split only works on strings. 
console.log(bobIsMe(myData));

//.split is applied to the string
//this should separate our one string into 4 different items
const dataArray = myData.split(',');
console.log('Create array from string',dataArray);

//.join does the reverse of .split. 
//it makes a string out of all the items in the array
const myNewString = dataArray.join(',');
console.log('Create string from array:',myNewString);

//.toString is another way to combine items in an array into one string
// the diff between .join and .toString being .join you can specify selectors with .join
//.toString only separates at commas.
const myToString = dataArray.toString();
console.log('String from array 2:', myToString);

// arrays lesson continued.




let percInOne = document.getElementById("partnerOne").value;
let percInTwo = document.getElementById("partnerTwo").value;
let pushP = document.querySelector('BUTTON.pushPercs');
let div = document.querySelector('div.msg');

let perc1 = percInOne.value;
let perc2 = percInTwo.value;


function buildList(){
	let readOut = div.appendChild(document.createElement('div'))
	readOut.appendChild(document.createTextNode(percEven() + " "));


}

function goList(){
	let a = perc1;
	let b = perc2;
	if (a > 0 && b> 0){
		buildList();
	}
}

function percSplit(a,b){
	let split = a>b?a:b;
	return split;
}

function percEven(a,b){
	let even = a === b ?'The two Parties have equal shares':
						'It seems that '+percSplit(perc1,perc2);+'Has the lion share';
	return even;
}

pushP.addEventListener('click',goList);


// end of first code


var perc1In = document.getElementById('partnerOne');
var perc2In = document.getElementById('partnerTwo');
var pushP = document.querySelector('BUTTON.pushPercs');
var ul = document.querySelector('ul');

// perc1 = perc1In.value;
// perc2 = perc2In.value;

function areValuesEqual(a,b){
	if (a === b){
		return true;
	}
	return false;
}
function getPercs(perc1,perc2){
	var partnerSplit2 = perc1 > perc2 ? perc1: perc2;
	return partnerSplit2;

}
function splitter(){
	var perc1 = parseInt(perc1In.value);
	var perc2 = parseInt(perc2In.value);
	var partSplit = areValuesEqual(perc1,perc2) 
					? "We get the same thang homie"
					:"Nah. " + getPercs(perc1,perc2); +" owns the lion share, buddy.";
	return partSplit;
}

function cutItUp(){
// var partner1 = prompt('Enter your Cut of the pie');
// var partner2 = prompt('Enter The Other partners cut');

var li = document.createElement('li');
li.appendChild(document.createTextNode(splitter));

ul.appendChild(li);

// var partnerSplit1 = areValuesEqual(perc1,perc2) ? "We get the same thang homie":"Nah. " + getPercs(); +" owns the lion share, buddy."
}

pushP.addEventListener('click',cutItUp);

//ternery operator
//syntax: condition ? expr1 : expr2;
function isUserValid(bool){
	return bool
}
var answer = isUserValid(false) ? "You may enter.":" Access Denied!";

function DoYouEatDick(bool){
return bool;
}

var eatDick = DoYouEatDick(false)? "ha You Just ate a Dick":"Sure You dont Eat dick Bro. Riiiight.";


//switch statement

function moveCommand(direction){
	var whatHappens; 
	switch(direction) {
		case "forward":
		whatHappens = "A grizzley monster is chasing you";
		break;
		case "backward" :
		whatHappens = "There is a Passage Way with a light radiating";
		break;
		case "right":
		whatHappens="Dinner with JayZ";
		break;
		case "left":
		whatHappens="$500k";
		break;
		default:
		whatHappens ="You have to make a move, my guy."
	}
	return whatHappens;
}
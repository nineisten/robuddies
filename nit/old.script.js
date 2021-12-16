var checkDriveAge = function(){
	var driveAge=prompt('How old are you?');
		if (driveAge > 16 ){
			alert('Thank you for verifying your age. Drive safely.');
		}
		else if (Number(driveAge) === 16) {
			alert('Ahh Haaaa, you new to this! Drive Safely my G.');
		}
		else {
			alert('Driver denied! YOU A BABY!!!I just called ya parents.');
		}
}

// function declaration


function checkDriveAge2(){
var driveAge=prompt('How old are you?');
		if (driveAge > 16 ){
			alert('Thank you for verifying your age. Drive safely.');
		}
		else if (Number(driveAge) === 16) {
			alert('Ahh Haaaa, you new to this! Drive Safely my G');
		}
		else {
			alert('Driver denied! YOU A BABY!!! I just called ya parents.');
		}
}

function checkDriveAge3 (driveAge){
		if (driveAge > 16 ){
			return('Thank you for verifying your age. Drive safely.');
		}
		else if (Number(driveAge) === 16) {
			return('Ahh Haaaa, you new to this! Drive Safely my G.');
		}
		else {
			return('Driver denied! YOU A BABY!!! I just called ya parents.');
		}

}

var fruits = [ "Banana", "Apples", "Oranges", "Blueberries"];

var fruits2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// objects

// var user = { 
// 	username:'John Dough',
// 	password:'Secret'
// };

var database = [
{
	userName:'John Dough',
	password:'Secret'
}];

var newsFeed = [
{
	userName:'John Dough',
	timeline:'wifes out for the day. Finally cutting the lawn.',
},
{
	userName:'Jane Dough',
	timeline:'Just got a really good facial. Much needed! lol',
},
{
	userName:'James Dough',
	timeline:'Just did first face painting in a while, she loved it. lol',
}
];

var userNamePrompt = prompt('Enter Username');
var passwordPrompt = prompt('Enter Password');

function signIn(user,pass){
	if (user === database[0].userName && 
		pass ===  database[0].password)
	{
		console.log(newsFeed);
	}else{
		console.log('Sorry, the password or username doesnt match.');
	}
}
signIn(userNamePrompt,passwordPrompt);


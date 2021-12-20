var database = [{
	userName:'Evandon',
	passWord:'password',
	timeLine:'This is my first post.'
},
{
	userName:'Nyjah',
	passWord:'password',
	timeLine:'this is my second post'
},
{
	userName:'Max',
	passWord:'password',
	timeLine: 'roof! roooof! roof!'
}
];

var newsfeed = [{
username:'Freddy',
timeline: "If you stay ready you aint gotta get ready"

},
{
username:'Marvin',
timeline: 'Man im starving'
},
{
username:'Ted',
timeline:'Hi. my names Ted.'
}];

var userPrompt = prompt('Enter your Username');
var passPrompt = prompt('Enter your Username');

// var logIn = function(user,pass){
// 	if (user === database[1].userName && 
// 		pass === database[1].passWord){ 
// 		console.log(newsfeed);

// 	}else{
// 		alert('Login Denied. Please check your credentials and try again');
// 	}
// };
function validUser(user,pass){
		for (var i=0; i < database.length; i++){
		if (database[i].userName === user &&
			database[i].passWord === pass){
			return true;
			//anytime you see "return" it exits the function hense why there is no "else" tag
		}
	}
		return false;
}
function logIn(user,pass){	
	if (validUser(user,pass)){
		console.log(newsfeed);
	}else{
		alert('Access denied. check your credentials and try again');
	}
}
logIn(userPrompt,passPrompt);
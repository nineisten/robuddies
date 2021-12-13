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


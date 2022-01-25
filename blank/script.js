let percInOne = document.getElementById('partnerOne');
let percInTwo = document.getElementById('partnerTwo');
let pushP = document.querySelector('BUTTON.pushPercs');
let div = document.querySelector('div.msg')

function hundoSplit(){
	let hundo = 100;
	let a
	let b

	if (a = hundo - changer()){
		return a;
	}
};


function inputValAdj(){


		if (changer() === perc1() && changer() > 0){
		percInTwo.value = hundoSplit();
		}
		else{
		percInOne.value = hundoSplit();
		}


};
function changer(){
	var change

  if (event.target.id === 'partnerOne'){ 
  	change = perc1();

  }else{
  	change = perc2();
  }
  return change;
};


function perc1(){
	return parseInt(percInOne.value);
};

function perc2(){
	return parseInt(percInTwo.value);
};
function runSplit(){
	if (perc1() > 0){
		buildCallOut();
	}
};
function percEven(){
	let splitter = percSplit(perc1(),perc2());
	let even = perc1() === perc2() ? "You both have even shares."
				:"From the looks of it, the person with "+ splitter + "%" + " has the Lion's Share";
return even
};
function percSplit(a,b){
	let split = a > b ? a:b;
	return split
};

function buildCallOut(){
	var callOut = div.textContent = percEven();
	return callOut;
};

pushP.addEventListener('click', runSplit);
percInOne.addEventListener('change',inputValAdj)

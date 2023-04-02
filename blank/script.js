let percInOne = document.getElementById('partnerOne');
let percInTwo = document.getElementById('partnerTwo');
let pushP = document.querySelector('BUTTON.pushPercs');
let div = document.querySelector('div.msg');

const hundoSplit = () =>{
	let hundo = 100;
	let a
	let b
	if (a = hundo - changer()){
		return a;
	}
};
const inputValAdj = ()=>{
		if (changer() === perc1() && changer() > 0){
		percInTwo.value = hundoSplit();
		}
		else{
		percInOne.value = hundoSplit();
		}
};
const changer = ()=>{
	let change
  if (event.target.id === 'partnerOne'){ 
  	change = perc1();
  }else{
  	change = perc2();
  }
  return change;
};
const perc1 = ()=>parseInt(percInOne.value);
const perc2 = ()=>parseInt(percInTwo.value);
const runSplit = ()=>{
	if (perc1() > 0){
		buildCallOut();
	}
};
const percEven = ()=>{
	let splitter = percSplit(perc1(),perc2());
	let even = perc1() === perc2() ? `You both have even shares`
				:`From the looks of it, the person with ${splitter}% has the Lion's Share`;
return even
};
const percSplit=(a,b)=>{
	let split = a > b ? a:b;
	return split
};
const buildCallOut = ()=>{
	let callOut = div.textContent = percEven();
	return callOut;
} zzzz 
pushP.addEventListener('click', runSplit);
percInOne.addEventListener('change',inputValAdj)

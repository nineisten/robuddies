var press = document.getElementById('pushTask');
var	taskInput = document.getElementById('taskBar');
var ul = document.querySelector('ul');

//begin functions 
function inputLength(){
	return taskInput.value.length;
}
//Create list with Complete and delete functions
function genList(){
	var li = document.createElement('li');
	var del = document.createElement('BUTTON');
	var fin = document.createElement('BUTTON');
	//define complete and delete button
	del.classList.add('clip');
	del.innerHTML = 'Delete'
	fin.classList.add('finish');
	fin.innerHTML = 'Complete';
	li.appendChild(document.createTextNode(taskInput.value + " "));
	li.appendChild(fin);
	li.appendChild(del);
	ul.appendChild(li);

	//clear input form
	taskInput.value = '';

	//complete task button
	fin.addEventListener('click',function(){
		fin.parentElement.classList.toggle('done')
	});
	//delete task button
	del.addEventListener('click',function(){
		del.parentElement.remove();
	})
}

//event functions
function genItem(){
	if(inputLength() > 0){
		genList();
	}
}
function genItemByKey(event){
	if (inputLength() > 0 && event.keyCode === 13){
		genList();
	}
}
press.addEventListener('click', genItem);
taskInput.addEventListener('keypress',genItemByKey);

//To Delete Pre Existing Items.

var exFin = document.querySelector('button.finish');
var exDel = document.querySelector('button.clip');
function exListDel(){
	
		exDel.parentElement.remove();
}
function exListFin(){
	exFin.parentElement.classList.toggle('done');
}

//run functions

exFin.addEventListener('click',exListFin);
exDel.addEventListener('click',exListDel);




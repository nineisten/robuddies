var todos = [

	'Wake Up',
	'Drink Water',
	'Make Bed',
	'Drink Water',
	'Eat Pussy',
	'drink water',

];
for ( var i=0; i < todos.length; i++)
{
console.log(todos[i],i);
}

todos.forEach(function(todo,i){
	console.log(todo,i);
})

// var counterOne = 20;
// while (counterOne > 0 ) {
// 	console.log(counterOne);
// 	counterOne--
// }
// var counterTwo = 10;

// do {
// 	console.log(counterTwo);
// 	counterTwo--;

// }while (counterTwo > 0);


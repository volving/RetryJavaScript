var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel');
console.log(names);	//	[ 'Adam', 'Bush', 'Chanel', 'Daniel' ]

console.log(names instanceof Array);	//	true
console.log(Array.isArray(names));		//	true

console.log(names.toString());	// Adam,Bush,Chanel,Daniel
console.log(names.valueOf());	//[ 'Adam', 'Bush', 'Chanel', 'Daniel' ]

console.log(names.join());	// Adam,Bush,Chanel,Daniel
console.log(names.join(' '));	// Adam Bush Chanel Daniel
console.log(names.join('||'));	// Adam||Bush||Chanel||Daniel

console.log('\n');

console.log(names);	//	[ 'Adam', 'Bush', 'Chanel', 'Daniel' ]




console.log(names.push('Zoro'));	// 5
console.log(names);					// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'Zoro' ]
console.log(names.pop());			// Zoro
console.log(names);					// [ 'Adam', 'Bush', 'Chanel', 'Daniel' ]

console.log('\n');

console.log(names.shift());	// Adam
console.log(names);	// [ 'Bush', 'Chanel', 'Daniel' ]

console.log(names.unshift('Elvis'));	// 4
console.log(names);	// [ 'Elvis', 'Bush', 'Chanel', 'Daniel' ]

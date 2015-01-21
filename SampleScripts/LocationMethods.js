var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel', 'Bush', 'Effeil', 'Ford');
console.log(names.indexOf('Bush'));		// 1
console.log(names.indexOf('Bush', 1));	// 1
console.log(names.indexOf('Bush', 2));	// 4
console.log(names.indexOf('Bush', 5));	// -1

console.log(names.lastIndexOf('Bush'));		// 4
console.log(names.lastIndexOf('Bush', 4));	// 4
console.log(names.lastIndexOf('Bush', 3));	// 1

var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel');
var names2 = ['WEI','Xen', 'York', 'Zoro'];

var names3 = names.concat(names2);
console.log(names);		// [ 'Adam', 'Bush', 'Chanel', 'Daniel' ]
console.log(names3);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zoro' ]

var names4 = names3.slice(2);
console.log(names4);	// [ 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zoro' ]

var names5 = names3.slice(2, 6);
console.log(names5);	// [ 'Chanel', 'Daniel', 'WEI', 'Xen' ]

console.log('\n');
console.log(names3);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zoro' ]
var names6 = names3.concat([]); // Create a new array using the existing one
console.log(names6);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zoro' ]

names3.splice(2, 9);	// Deletion
console.log(names3);	// [ 'Adam', 'Bush' ]
console.log(names6);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zoro' ]
names3.splice(1, 0, 'Chanel', 'Daniel');	// Instion
console.log(names3);	// [ 'Adam', 'Chanel', 'Daniel', 'Bush' ]

names6.splice(2, 2, 'Chower', 'Duskun');	// Replacement
console.log(names6);	// [ 'Adam', 'Bush', 'Chower', 'Duskun', 'WEI', 'Xen', 'York', 'Zoro' ]


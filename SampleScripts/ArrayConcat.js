var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel');
var names2 = ['WEI','Xen', 'York', 'Zoro'];

var names3 = names.concat(names2);
console.log(names);		// [ 'Adam', 'Bush', 'Chanel', 'Daniel' ]
console.log(names3);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zoro' ]

var names4 = names3.slice(2);
console.log(names4);	// [ 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zoro' ]

var names5 = names3.slice(2, 6);
console.log(names5);	// [ 'Chanel', 'Daniel', 'WEI', 'Xen' ]
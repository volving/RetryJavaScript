var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel', 'Bush', 'Effeil', 'Ford');

/*********every()*********/
var every = names.every(function(item, index, array){
//	console.log(item);
	return true;
});
console.log('-----------------------------');
console.log(every);

/*********filter()*********/
console.log('-----------------------------');
var filter = names.filter(function (item, index, array) {
//	console.log(array);
//	console.log(index);
	return (item.length > 4);
})
console.log(filter);

/*********forEach()*********/
console.log('-----------------------------');
var forEach = [];
names.forEach(function (item, index, array) {
	item = '_'.concat(item);
//	forEach.push(item);
	forEach.unshift(item);
//	console.log(item);
})
console.log(forEach);
console.log(names);

/*********map()*********/
console.log('-----------------------------');
var mp = names.map(function (item, index, array) {
//	console.log(item+":"+index)
	item = item.concat(index);
	console.log(item);
	return item;
});
console.log(mp);

/*********some()*********/
console.log('-----------------------------');
var some = names. map(function (item, index, array) {
	return (item == 'Bush');
});
console.log(some);


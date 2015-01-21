var add_2 = function(x){
	return x+2;
}

var map1 = function (func, list) {
	var output = [];
	for(idx in list){
		output.push(func(list[idx]));
	}
	return output;
}
console.log(map1(add_2, [5,6,7]));


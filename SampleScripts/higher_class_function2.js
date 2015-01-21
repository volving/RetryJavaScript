var add_2 = function (x) {
	return x+2;
}

var double = function (x) {
	return x<<1;
}

var map = function (func, list) {
	console.log(list);
	var out = []
	if((func !== null) && (func !== undefined) && (list !== null) && (list !== null)){
		for(it in list){
			out.push(func(list[it]));
		}
	}
	console.log(out);
	return out;
}

var buildProcessor = function (func) {
	var process_func = function (list) {
		var out = map(func, list);
		return out;
	}
	return process_func;
	
}

//console.log(double(1));


var built_add_2 = buildProcessor(add_2);
//console.log(built_add_2([1,10,20]));

var buildMultiplier = function (x) {
	return function (y) {
		return x*y;
	}
}
var bm = buildMultiplier;

var m = bm(2);
console.log(m(3));












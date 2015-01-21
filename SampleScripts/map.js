var add_2 = function (x) {

	var t = 2+x;
//	console.log(x+"::"+t);
	return t;
	
}

var sqare = function (x) {
	return x*x;
}

var map0 = function (func, list) {
	var out = [];
	
	for (arg in list) {
		console.log(arg);
		var c = func(list[arg]);
		out.push(c);
//		console.log(arg+":"+c);
	}
	
	return out;
}



console.log(map0(add_2, [1,10,20,30,40]));
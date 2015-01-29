function sumup(){
	var sum = 0;
	for(var i = 0; i < arguments.length; i++){
		sum += arguments[i];
	}
//	console.log(sum);
	return sum;
}


var result = sumup(1,2,99,1024,543);

console.log(result);
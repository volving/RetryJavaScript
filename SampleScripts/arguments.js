function sayHi1(){
	console.log(arguments.length);
	for(arg in arguments){
		console.log(arguments[arg]);
	}
	console.log("==================================");
	console.log(arguments);
}

sayHi1("hi, ", "Boyang");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function sayHi2(name, msg){
	console.log(arguments.length);
	for(arg in arguments){
		console.log(arguments[arg]);
	}
	console.log("==================================");
	console.log(name,msg);
	console.log(arguments);
}

sayHi2("hi, ", "Boyang");
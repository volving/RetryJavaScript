function outer() {
	console.log(arguments.callee.caller);
}

function go(){
	outer();
}

go();

function gogo(go,go) {
	
}

console.log(gogo.length);

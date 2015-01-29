
function getNS(num){
	var t = String(num).slice(0, -1);
	switch (num%10) {
		case 1:
			return t.concat('1st');
			break;
		case 2:
			return t.concat('2nd');
			break;

		case 3:
			return t.concat('3rd');
			break;
		default:
			return t.concat(num,'th');
			break;
	}
}


console.log(getNS(1));
console.log(getNS(2));
console.log(getNS(3));
console.log(getNS(4));
console.log(getNS(6));
console.log(getNS(9));
console.log(getNS(10));
console.log(getNS(1024));
console.log(getNS(Math.random()));
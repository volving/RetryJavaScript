var a = [1, 5, 10, 15];
console.log(a);					// [ 1, 5, 10, 15 ]
console.log(a.sort());			// [ 1, 10, 15, 5 ]
console.log(a.sort(compare));	// [ 1, 5, 10, 15 ]
console.log(a.sort(comp_rvs));	// [ 15, 10, 5, 1 ]

function compare(p1, p2) {
	if(p1 > p2){
		return 1;
	}if(p1 == p2){
		return 0;
	}else {
		return -1;
	}
}

function comp_rvs(p1, p2) {
	if(p1 > p2){
		return -1;
	}if(p1 == p2){
		return 0;
	}else {
		return 1;
	}
}
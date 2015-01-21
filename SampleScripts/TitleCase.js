function tCase(str) {
	var start = 0;
	if (str != null) {
		var words = str.split(' ');
	}
	for (it in words) {
		
		var tmp = words[it].toLowerCase();
		if(!(it != 0 && (['a', 'the', 'of', 'for', 'to', 'on', 'in', 'up', 'down'].indexOf(tmp) > -1))){
			words[it] = upHead(words[it]);			
		}

	}
	return words.join(' ');
}

function upHead(chr) {
	
	var head = chr.substr(0,1).toUpperCase();
	
	return chr = head + chr.slice(1);
}

//console.log(upHead('abc'));
/*
console.log('eyes on me:'+tCase('eyes on me')+'\n');

console.log('a tutorial to the language of a JavaScript!:'+tCase('a tutorial to the language of a JavaScript!')+'\n');

console.log('convert a string to title-case:'+tCase('convert a string to title-case')+'\n');
*/
//alert('hello')；

//console.log(var);
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
//alert('String')
var msg = window.prompt('请输入字串')；
var txt = tCase(msg);
console.log(txt);

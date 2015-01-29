var today = new Date();
//console.log(today);
//var item = 0;
//for( item in today){
//	console.log(today[item]);
//	console.log('fuck!');
//}
var dayss = {
	'1':'Mon',
	'2':'Tue',
	'3':'Wed',
	'4':'Thus',
	'5':'Fri',
	'6':'Sat',
	'7':'Sun'
}
var Months = {
	'0':'Jan',
	'1':'Feb',
	'2':'Mar',
	'3':'Apr',
	'4':'May',
	'5':'Jun',
	'6':'Jul',
	'7':'Aug',
	'8':'Sep',
	'9':'Oct',
	'10':'Nov',
	'11':'Dec'
}

function getNS(num){
	
	var t = String(num).slice(0, -1);
//	console.log(t);
	var last = num%10
	switch (last) {
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
			t = t.concat(last,'th')
//			console.log(t);
			return t;
			break;
	}
}

var myDate =  {};

var tmp = [];
tmp.push(today.getFullYear());
tmp.push(today.getMonth());
tmp.push(today.getDate());
tmp.push(today.getDay());
tmp.push(today.getHours());
tmp.push(today.getMinutes());
tmp.push(today.getSeconds());
tmp.push(today.getMilliseconds());

myDate.params = tmp;

var d = '';
d = d.concat(dayss[tmp[3]], ' ', Months[tmp[1]], ' ', getNS(tmp[2]), ', ', tmp[0], ' ', tmp[4], ':',tmp[5], ':', tmp[6]);

console.log(d);	//Thus Jan 22nd, 2015 20:36:42
//console.log(tmp[2]);
myDate.dates = d;
//console.log(myDate);


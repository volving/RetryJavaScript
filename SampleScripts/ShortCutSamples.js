var Man = function (name, age, mature) {
	this.name = name;
	this.age = age;
	this.mature = mature;
	this.speak = function (words) {
		if(words){
			console.log(words);
		}else{
			console.log('I have nothing to say');
		}
	}
}

me = new Man('boyang', 27, true);
me.speak('Good evening, ladies and gentlemen!');

var i = me && me.name;
console.log(i);

var you;
var u = you && you.name || 'YOU';

console.log(u);
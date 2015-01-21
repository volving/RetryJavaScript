function createPerson(name, age, mature){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.mature = mature;
	o.sayName = function(){
		console.log(this.name);
	}
	return o;
}

var p1 = createPerson('Wolverine', 171, true);
console.log(p1);
p1.sayName();


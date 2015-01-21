function Person(name, age, mature){
	this.name = name;
	this.age = age;
	this.mature = mature;
	this.sayName = function () {
		console.log(this.name);
	}
}

p2 = new Person('Logen', 171, true);

console.log(p2);
p2.sayName();
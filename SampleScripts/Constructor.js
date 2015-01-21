function Person(name, age, married) {
	this.name = name;
	this.age = age;
	this.married = married;	
}

var me = new Person('volving', 27, false);

console.log(me);
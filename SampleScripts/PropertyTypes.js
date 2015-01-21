var list = function (target) {
	
	var sp = [];
	for (var item in target) {
		sp.push(target[item]);
	}
	console.log(sp);
}

var Person = function(name, title, age, words){
	this.name = name;
	this.title = title;
	this.age = age;
	this.words = words;
	speak = function(wd){
		if(wd == null){
			wd = words;
		}
		console.log(wd);
	};
}
var person = new Person('Volverine', 'Captain', 210, 'Smash\'em all!');
var dog = new Person('Chairman Mao', '???', 72, 'Kill all enemies!');

Object.defineProperty(person, 'name', {
	configurable:false,
	value:'VOLVING'
});

Object.defineProperty(person, 'title', {
	writable:false
});


console.log(person);
delete person.name;
person.title = 'sailor';
console.log(person);

console.log('>-------------------<') 

console.log(dog);
delete dog.name;
dog.title = 'Worker';
console.log(dog);

console.log('>-------------------<') 

list(person);

Object.defineProperty(dog, 'speak', {
	enumerable:false
});
list(dog);
/*
Object.defineProperty(dog, 'speak', {
	enumerable:true
});
*/
console.log('>--------======--------<') 

var lady = {
	name : 'Ivry',
	_age : 24
}
console.log(lady.age);

Object.defineProperty(lady, 'age', {
	get: function () {
		return this._age;
	},
	set: function (newAge) {
		this._age = newAge;
	}
})

console.log(lady.age);

///////////////Retrieve property descriptors//////////////////////

var book = {};
Object.defineProperties(book, {
	_age:{
		value: 24
	},
	
	age:{
		get: function(){
			return this._age;
		},
		
		set: function(val){
			this._age = newValue;
		}
	}
})

console.log(Object.getOwnPropertyDescriptor(book, 'age'));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(Object.getOwnPropertyDescriptor(person, 'name'));


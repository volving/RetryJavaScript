
var person = new Object();
person.name = 'Nicholas';
console.log(person.name); //Nicholas

var name = 'Nicholas';
name.age = 27;
console.log(name.age); //Undefined


var a = 5;
var b = a;  //b is initialed with the value of a
    
    
var obj1 = new Object();
var obj2 = obj1;
obj1.name = 'Nicholas';
console.log(obj2.name); //'Nicholas'

function func(arg) {
	arg = 1024;
}
func(b);
console.log(b);

function fun(arg, arg2) {
	arg.name=arg2
}

fun(obj2, 'boyang');

console.log(obj1);
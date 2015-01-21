//console.log(Number("0x123a"));

var say = function (something) {
	console.log(something);
}

var foo = 42;
var bar = 42;

var baz = '42';

say(eval(foo == bar));
say(eval(foo == baz));
say(eval(foo === baz));



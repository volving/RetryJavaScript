<!-- create time: 2015-01-19 01:18:39  -->


# 读书笔记 for *Professional JavaScript for Web Developers, 3rd Edition*

---

## Chapter 3 p25~ === January 15, 2015 4:59 PM

### Syntax: 
---

	* C, C-like languages(Java, Perl)
	* Looser 
	
#### Case-sensitive

* *test* is different from *Test*
* *typeof* is a keyword, and can't used as a variable
	
#### Identifiers
* name of a variable, function, property, function argument
	1. 1st character **MUST** be a LETTER, an underscore **_**, or a dollar sign **$**;
	2. All other characters maybe LETTERs, **_**, **$**, or **numbers**.
	3. LETTERs include extended ASCII or Unicode letter characters such as À and Æ, but this is no recommended!
	4. By convention, using **camel case** is easy to read~ Just like those in JAVA
	
#### Comments
* Single-line ``` //This is a single-line comment```
* Block 

	```javascript
	/*
	 *This is a multi-line
	 *comment
	 */
	 
	/*
	 This is also a multi-line
	 comment
	*/
	```
	
### *KEYWORDS*, *RESERVED WORDS*, *TRUE*, *FALSE* and *NULL*

* **Keywords** and **Reserved words**
	* Keywords
	>
break do instanceof typeof case else new var catch finally return void continue for switch while debugger* function this with default if throw
delete in try


	* Reserved words
	> abstract enum int boolean export interface byte extends long
char final native class float package const goto private debugger implements protected double import public short static super synchronized throws transient volatile 

### VARIABLES
* Use var to declare
* It's a placeholder for any type of value
* It's undefined without initialization
* Omitting the var operator, we'll get a **global variable**

	```javascript
	function test(){  
	    message = "hi";  
	}  
	test();  
	console.log(message);  
	//as soon as test() invoked, the message variable is available;
	```

### DATA TYPES
---
>
* 5 primitive types:
		Undefined, Null, Boolean, Number, String.
* 1 Object: an unordered list of name-value pairs.
* typeof:
	undefined, boolean, string, number, object(object, null), function
	
---

#### Undefined
* variable not initialized => undefined
* variable not declared => error!
	* but `typeof` undeclared returns undefined
		
	```javascript 
	var message;
		
	alert(message); //"undefined"
	alert(age); //err
		
	alert(typeof message); //"undefined"
	alert(age); //"undefined"
	```	

* ==Always remember to initialize variable. If so, you'll know the error is caused by the given variable not declared rather than not initialized.==

#### Null
* null is an empty object pointer

	```javascript
	var car = null;
	alert(typeof car); //"object"
		
	```
	
* ==When defining a variable that is meant to later hold an object, it's advisable to initialize the variable to **null** as opposed to anything else.== That way, you can explicitly check for the value **null** to determine if the variable has been filled with an object reference at a later time.

	```javascript
	if(car != null){
		//do something with car
	}
	```

* undefined is derivative of null
		
	```javascript
	console.log(null == undefined); //true
	```
	
* ==Always remember to do this==

	```javascript
	var a_undefined_var;	//Never '= undefined'
	var an_empty_pointer_to_object = null;
	```

#### Boolean
* only to literal values: true, false
* distinct from numeric values, true != 1, false != 0
		
	```javascript
	var found = true;
	var lost = false;
	```
	
* cast function, convert a value into its Boolean equivalent 
		
	```javascript
	var msg = "hello, world!";
	var msgBoolean = Boolean(msg);
	console.log(msgBoolean);
	```
	
* 'if' statement perform automatically converting
	
* numerically: Boolean(±0) = false; other numbers is true
	
* p.s. 

	DATA TYPE | VALUES CONVERTED TO TRUE | VALUES CONVERTED TO FALSE
	--------- | ------------------------ | ---------------------
	Boolean   |        true              | 	false
	String 	| 	Any nonempty string		| 	“” (empty string)
	Number 	|	Any nonzero number(including infinity) | 0, NaN (See the “NaN” section later in this chapter.)
	Object 	| 		Any object 			| null
	Undefined | 			n/a 				| undefined
	
#### Number

* use IEEE-754 format to present both **integers** and **float-point**, double-precision values
* integer `var intNum = 55;`
* octal `var octalNum = 079;` starts with *0*
* hexadecimal `var hexNum = 0xA;` starts with *0x*

* Floating-Point Values
	* `var floatNum = 1.1;`

* Range of Values 
	* `Number.MIN_VALUE`  
	* `Number.MAX_VALUE`

	* NaN 
	* Special numeric value called NaN, short for Not a Number

	* Number Conversions: 3 functions to convert nonnumeric values into numbers
	* `Number()` //used for any data type
		* Number(undefined) => NaN
		* literal integer into integer
		* literal hexadecimal into integer
		* literal float into float
		* others  into NaN
		
	* `parseInt()` //String to int
	* `parseFloat()` // String to float

#### String
	
* use "", '' to hold strings, they have ***no differences*** at all
* The Nature of String
	* No changing, but recreate one and destroy the origin
	
	```javascript
	var lang = "JavaScript";
	lang = lang + " Tutorial is fun!"; // Destroy "JavaScript", and create "JavaScript Tutorial is fun!"
	
	```
* Converting to a String
	* Every value holds the method `toString()`
	* A string calls this method and then return a copy of itself
	* For **null** and **undefined**, this method is not available.
	* If called by a number, a **parameter** is optional:
	
	```javascript
	var num = 10;
	alert(num.toString()); //"10"
	alert(num.toString(2)); //"1010"
	alert(num.toString(8)); //"12"
	alert(num.toString(10)); //"10"
	alert(num.toString(16)); //"a"
	```
* Function `String()`	
	1. if the parameter has a `toString()` method, then toString() is called and returned.
	2. If the value is null, "null" is returned
	3. undefined => return "undefined"

#### The Object Type
* Objects are never copied!
* They're passed around by ***REFERENCE***

	```javascript
	var a = {}, b = {};
	console.log(a == b); //false
	var c = d = {};
	console.log(c == d); //true
	c.name = "c";
	console.log(d); //{name="c"}
	```
## Chapter 3 p25~ === 16:00s PM January 19, 2015

### OPERATORS

#### Unary Operators

* **Unary plus**
	* to Numbers, it performs like it does in mathematics
	* to String, calls `Number()`;
	
* **unary minus**
	* to Numbers, just negates it
	* to String, calls `Number()`, then negates it

#### Boolean Operators
* Logical **AND**(&&),**NOT**(!),**OR**(||)
* Same as those of java

#### Multiplicative Operators ***多元操作***
* Multiply
* Divide
* Modulus
* Add
* Subtract

#### Relational Operators
* >, =, <, >=, <=
* Rules:
	1. If the operands are numbers, perform a numeric comparison
	2. String: Compare the character codes of each corresponding character in the string
	3. One Number: convert the other to a number and perform a numeric comparison
	4. One Object: Call valueOf() and use its result to perform the comparison according the previous 3 rules. If valueOf() is not available, call toString() then use that value according to the previous rules.
	5. One Boolean: covert it to a number and perform comparison.

#### Equality Operators
>
1. ***equal, not equal***: perform conversion before comparison
2. ***identically equal, not identically equal***: comparison without conversion

* Equal and Not Equal: equal sign(==), not-equal sign(!=) >>>>> Both do conversions to determine if two operands are equal(called ***TYPE COERCION***)
	* Rules:
		* One is Boolean value: convert it into a numeric value before checking for equality, `false=>0`, `true=>1`
		* One Number: convert the string into a number before checking
		* One Object, the other not: `valueOf()` is called on the object to retrieve a primitive value to compare according to the previous rules
		* Null and Undefined are equal, but they cannot be converted into any other values for equality checking
		* Either operand NaN: == returns false, != returns true
		* Both Objects: if they point to the same one, return true; other wise false

* identically equal(===), not identically equal(!==)
	* Rules:
		* No datatype conversion,(No ***TYPE COERCION***)

		
#### Conditional Operator
* Same as those of Java:

```javascript
variable = boolean_expression ? true_value : false_value;
var max = (num1 > num2) ? num1 : num2;
```

#### Assignment Operators
* =, +=, -=, *=, /=, %=, <<=, >>=(signed), >>>=(unsigned)

#### Comma Operator
* There's no ***Tuple*** type in JavaScript. So `var a = (1,'2',[1,2,3,4],{name:'JavaScript', birth:1995},true);` equals `var a = true;`

### STATEMENTS

#### The `if` Statement

#### The `do-while` Statement

#### The `while` Statement

#### The `for` Statement

#### The `for-in` Statement

#### Labeled Statements
>```javascript
label: statement
```

```javascript
start: for(var i = 0; i < count; i++){
	alert(i);
}
```
In this example, the label `start` can be referenced later by using the break or continue statement.Labeled statements are typically used with nested loops.

#### The break and continue Statements
* `break;` make control flow jump to the statement after the loop statement in which the `break;` located.
* `continue` 
	* `continue;` makes control flow jump over the rest statements of this cycle of the loop.
	* `continue start;` jump to label `start`;
* `with(){}` statement:
```javascript
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
```
equals to
```javascript
with(location){
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}
```

### FUNCTIONS
```javascript
function funName(argument1, arg2,...){
	//statements here!
}
```

> 
> JS Interpreter does not care about how many arguments or what type the arguments are! Just treat them as an array. An object called `arguments` can be accessed while inside a function to retrieve the values of each argument that was passed in.
> Using `arguments[indexNumber]` to access that.

```javascript
function sayHi1(){
	console.log(arguments.length);
	for(arg in arguments){
		console.log(arguments[arg]);
	}
	console.log("==================================");
	console.log(arguments);
}

sayHi1("hi, ", "Boyang");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function sayHi2(name, msg){
	console.log(arguments.length);
	for(arg in arguments){
		console.log(arguments[arg]);
	}
	console.log("==================================");
	console.log(name,msg);
	console.log(arguments);
}

sayHi2("hi, ", "Boyang");

```
output:

```c
2
hi, 
Boyang
==================================
{ '0': 'hi, ', '1': 'Boyang' }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2
hi, 
Boyang
==================================
hi,  Boyang
{ '0': 'hi, ', '1': 'Boyang' }

```

#### No Overloading
The last same-named function will overwrite the ones before it

## SUMMARY

* 5 Basic DATATYPEs: 
	* Undefined
	* Null
	* Boolean
	* Number: Number is not separated into integers and floating-points.
	* String

* Objects: No complex DATATYPEs, Object is the base type for all objects in JavaScript
* Operators provided: arithmetic operators, Boolean operators, relational operators, equality operators and assignment operators.
* Flow-control statements borrowed from other languages. `if`,`for`,`switch`
* **Functions** are totally different from other language like C and Java.
	* No need to specify the return value: **ANY** function can return **ANY** value at **ANY** time.
	* Functions return `undefined` if they don't specify a return value
	* No function signature, so there're no overloading, arguments are passed as an array containing zero or more values.
	* **ANY** number of arguments can be passed into a function and are accessible through the `arguments` object.
	


## Chapter 4 p86~ === 9:23 PM January 19, 2015


## Chapter 5 Reference Type, p103~  === 2:44 PM January 20, 2015

### THE OBJECT TYPE

Two ways to create an instance of Object.

* new a instance of Object
```javascript
var person = new Object();
```
* object literal notation
```javascript
var person = {
	name : 'Nicholas',
	age : 29
}
```
Two ways to get access to the properties

* brackets notation: used especially when the property name contains a blank or other syntax error/keyword/reserved word.

```javascript
var person = {
	'first name': 'volve',
	'last name': 'WEI'
}
var f_name = person["first name"];
var ppt_name = 'last name';
var f_name_2 = person[ppt_name];

console.log(f_name);	//volve
console.log(f_name_2);	//WEI
```

* dot notation

```javascript
var age = person.age;
```


#### THE ARRAY TYPE

**ANY** type of data can be hold in each slot.

* Two ways to create Arrays:

	* new notation, uhn... `new` can be omitted

	```javascript
	var color = new Array();
	var colour = new Array(20);			//length is 20
	var colors = new Array('red', 'blue', 'green'); // ['red', 'blue', 'green']
	```

	* array literal notation:

	```javascript
	var colors = ['red', 'blue', 'green'];
	var names = [];
	var values = [1,2,]; 			// 2 or 3 items
	var options = [,,,,,]; 			//5 or 6 items
	```
* Detecting Arrays
	* `instanceof`
	* `Array.isArray()`

```javascript
var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel');
console.log(names);		// [ 'Adam', 'Bush', 'Chanel', 'Daniel' ]

console.log(names instanceof Array);		// true
console.log(Array.isArray(names));		// true

```


* `join()` items in array

```javascript
console.log(names.join());			// Adam,Bush,Chanel,Daniel
console.log(names.join(' '));		// Adam Bush Chanel Daniel
console.log(names.join('||'));	// Adam||Bush||Chanel||Daniel
```

* Conversion Methods

```javascript
console.log(names.toString());	// Adam,Bush,Chanel,Daniel
console.log(names.valueOf());		//[ 'Adam', 'Bush', 'Chanel', 'Daniel' ]

```


* Stack Methods, treat array as **STACK**, LIFO
	* `push`

	* `pop`

* Queue Methods, up to the same, treat array as **QUEUE**, FIFO
	* `shift` 
	* `unshift`

	```javascript
	console.log(names.push('Zero'));	// 5
	console.log(names);					// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'Zero' ]
	console.log(names.pop());			// Zero
	console.log(names);					// [ 'Adam', 'Bush', 'Chanel', 'Daniel' ]
	
	```

* Reordering Methods
	* `reverse()`
	* `sort()`	parameter：function how to treat the 

	```javascript
	var a = [1, 5, 10, 15];
	console.log(a);					// [ 1, 5, 10, 15 ]
	console.log(a.sort());			// [ 1, 10, 15, 5 ]
	console.log(a.sort(compare));	// [ 1, 5, 10, 15 ]
	console.log(a.sort(comp_rvs));	// [ 15, 10, 5, 1 ]

	function compare(p1, p2) {
		if(p1 > p2){
			return 1;
		}if(p1 == p2){
			return 0;
		}else {
			return -1;
		}
	}

	function comp_rvs(p1, p2) {
		if(p1 > p2){
			return -1;
		}if(p1 == p2){
			return 0;
		}else {
			return 1;
		}
	}	
	```

* Manipulation Methods
	* `concat()`
	* `slice()`

	```javascript
	var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel');
	var names2 = ['WEI','Xen', 'York', 'Zero'];

	var names3 = names.concat(names2);
	console.log(names);		// [ 'Adam', 'Bush', 'Chanel', 'Daniel' ]
	console.log(names3);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zero' ]

	var names4 = names3.slice(2);
	console.log(names4);	// [ 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zero' ]

	var names5 = names3.slice(2, 6);
	console.log(names5);	// [ 'Chanel', 'Daniel', 'WEI', 'Xen' ]	
	```
	
	* `splice()` the so-called **MOST POWERFUL METHOD**
		* Deletion
			just call `.splice(<start>[, end])` to delete the items
		* Insertion
			call `.splice(<start>, <number to delete>, <,,,>)` to insert <,,,> at position <start> after deleting <number to delete> items behind <start>
		* Replacement special usage of the 'Insertion'

		```javascript
		console.log(names3);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zero' ]
		var names6 = names3.concat([]); // Create a new array using the existing one
		console.log(names6);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zero' ]

		names3.splice(2, 9);	// Deletion
		console.log(names3);	// [ 'Adam', 'Bush' ]
		console.log(names6);	// [ 'Adam', 'Bush', 'Chanel', 'Daniel', 'WEI', 'Xen', 'York', 'Zero' ]
		names3.splice(1, 0, 'Chanel', 'Daniel');	// Insertion
		console.log(names3);	// [ 'Adam', 'Chanel', 'Daniel', 'Bush' ]

		names6.splice(2, 2, 'Chewer', 'Duskun');	// Replacement
		console.log(names6);	// [ 'Adam', 'Bush', 'Chewer', 'Duskun', 'WEI', 'Xen', 'York', 'Zero' ]
		
		```

* Location Methods
	* `.indexOf()`
	* `.lastIndexOf()`
	
	```javascript
	var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel', 'Bush', 'Eiffel', 'Ford');
	console.log(names.indexOf('Bush'));	// 1
	console.log(names.indexOf('Bush', 1)); // 1
	console.log(names.indexOf('Bush', 2)); // 4
	console.log(names.indexOf('Bush', 5)); // -1

	console.log(names.lastIndexOf('Bush')); // 4
	console.log(names.lastIndexOf('Bush', 4)); // 4
	console.log(names.lastIndexOf('Bush', 3)); // 1

	```

* Iterative Methods
	* `.every(func)`	: Runs the given function **func** on every item in the array and return **true** if **func** returns **true** for every item.

	```javascript
	var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel', 'Bush', 'Eiffel', 'Ford');

	var every = names.every(function(item, index, array){
		console.log(item);
		return true;
	});
	console.log('-----------------------------');
	console.log(every);
	
	%%%%%%%%%%%console%%%%%%%%%%%
	Adam
	Bush
	Chanel
	Daniel
	Bush
	Eiffel
	Ford
	-----------------------------
	true
	%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	```
	
	* `.filter(func)` : Runs the given function **func** on every item in the array and returns an array of all items(in array) on which the function returns **true**;

	```javascript
	console.log('-----------------------------');
	var filter = names.filter(function (item, index, array) {
	//	console.log(array);
	//	console.log(index);
		return (item.length > 4);
	})
	console.log(filter);
	%%%%%%%%%%%console%%%%%%%%%%%
	true
	-----------------------------
	[ 'Chanel', 'Daniel', 'Eiffel' ]
	%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

	```
	
	* `.forEach(func)` : Runs the given function on every item in the array~ no returns

	* `.map(func)` : Runs the given function, and return result of each function call in an array
	* `.some(func)` : Runs the given function on  every item in the array and returns array of **true** (if the function returns true) and **false** (if the function returns false)

	```javascript
	var names = new Array('Adam', 'Bush', 'Chanel', 'Daniel', 'Bush', 'Eiffel', 'Ford');

	/*********every()*********/
	var every = names.every(function(item, index, array){
	//	console.log(item);
		return true;
	});
	console.log('-----------------------------');
	console.log(every);

	/*********filter()*********/
	console.log('-----------------------------');
	var filter = names.filter(function (item, index, array) {
	//	console.log(array);
	//	console.log(index);
		return (item.length > 4);
	})
	console.log(filter);

	/*********forEach()*********/
	console.log('-----------------------------');
	var forEach = [];
	names.forEach(function (item, index, array) {
		item = '_'.concat(item);
	//	forEach.push(item);
		forEach.unshift(item);
	//	console.log(item);
	})
	console.log(forEach);
	console.log(names);

	/*********map()*********/
	console.log('-----------------------------');
	var mp = names.map(function (item, index, array) {
	//	console.log(item+":"+index)
		item = item.concat(index);
		console.log(item);
		return item;
	});
	console.log(mp);

	/*********some()*********/
	console.log('-----------------------------');
	var some = names. map(function (item, index, array) {
		return (item == 'Bush');
	});
	console.log(some);

	%%%%%%%%%%%Console%%%%%%%%%%%
	-----------------------------
	true
	-----------------------------
	[ 'Chanel', 'Daniel', 'Eiffel' ]
	-----------------------------
	[ '_Ford',
	  '_Eiffel',
	  '_Bush',
	  '_Daniel',
	  '_Chanel',
	  '_Bush',
	  '_Adam' ]
	[ 'Adam', 'Bush', 'Chanel', 'Daniel', 'Bush', 'Eiffel', 'Ford' ]
	-----------------------------
	Adam0
	Bush1
	Chanel2
	Daniel3
	Bush4
	Eiffel5
	Ford6
	[ 'Adam0',
	  'Bush1',
	  'Chanel2',
	  'Daniel3',
	  'Bush4',
	  'Eiffel5',
	  'Ford6' ]
	-----------------------------
	[ false, true, false, false, true, false, false ]


	%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	```

* Reduction Methods
	* `.reduce(func)`
	

	* `.reduceRight(func)`

### THE DATE TYPE

### THE REGEXP TYPE


### THE FUNCTION TYPE

### PRIMITIVE WRAPPER TYPES: STRING, NUMBER, BOOLEAN

#### The Boolean Type

#### The Number Type

#### The String Type

### SINGLETON BUILT-IN OBJECTS
#### The Global Object

#### The Window Object

#### The Math Object

### Summary



## CHAPTER 6 OBJECT-ORIENTED PROGRAMMING January 21, 2015 9:33 PM

>An object is an array of values in no particular order. Each property or method is identified by a name that is mapped to a value(objects => hash tables).**A group of name-value pairs where the value may be data or a function!**

### UNDERSTANDING OBJECT PROPERTIES

#### Types of Properties (Data,Accessor)
* **Data Properties**: It contains a single location for a data value. Values are read from and written to this location. Data properties have four attributes describing their behavior:(Boolean type)
	* [[configurable]]: Indicates if the property may be redefined by removing the property via delete, changing the property's attributes, or changing their property into an accessor property. Value is ***`true`*** by default for those properties defined directly on an object.
	* [[enumerable]]: Indicate if the property will be returned in a for-in loop. By default this is ***`true`*** for all properties defined directly on an object.
	* [[writable]]: Indicates if the property's value can be changed. By default, this is ***`true`***.
	* [[value]]: Contains the actual data value for the property. This is the location from which the property's value is read and location to which new values are saved. The default value for this attribute is ***`undefiled`***.

	```javascript
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
	var person = new Person('Wolverine', 'Captain', 210, 'Smash\'em all!');
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

	var sp = [];
	for (var item in person) {
		sp.push(person[item]);
	}
	console.log(sp);
	Object.defineProperty(dog, 'speak', {
		enumerable:false
	});

	var sd = [];
	for(var item in dog){
		sp.push(dog[item]);
	}
	console.log(sd);
	//%%%%%%%%%CONSOLE%%%%%%%%%
	{ name: 'VOLVING',
	  title: 'Captain',
	  age: 210,
	  words: 'Smash\'em all!' }
	{ name: 'VOLVING',
	  title: 'Captain',
	  age: 210,
	  words: 'Smash\'em all!' }
	>-------------------<
	{ name: 'Chairman Mao',
	  title: '???',
	  age: 72,
	  words: 'Kill all enemies!' }
	{ title: 'Worker', age: 72, words: 'Kill all enemies!' }
	>-------------------<
	[ 'VOLVING', 'Captain', 210, 'Smash\'em all!' ]
	[]
	//%%%%%%%%%%%%%%%%%%%%%%%%%%
	```

==Be careful to use `Object.defineProperty()`, if one internal property is set `false`, the `defineProperty()` cannot be applied on that property== after the code above, execute
> ```javascript
> 
Object.defineProperty(dog, 'speak', {
	enumerable:true
});
```
we'll get error:\" `TypeError: Cannot redefine property: speak`\"


* **Accessor Properties** contain **NO** data value. Instead, they contain a combination of a getter function and a setter function(however both are not necessary). When an accessor property i read from, the getter function is called, and it's the function's responsibility to return a valid value; when an accessor property is written to, a function is called with the new value, and that function must decide how to react to the data. Accessor properties have four attributes:
	* [[configurable]]
	* [[enumerable]]
	* [[get()]]: The function to call when the property is read from. The default value is `undefined`.
	* [[set()]]: called when the property is written to. Default is `undefiled`.

	==Only `Object.defineProperty()` can define a _accessor property_==

	*Something like the setters and getters in J2EE*
	
	```javascript
	var lady = {
		name : 'Ivey',
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
	
	```
* Method `Object.defineProperties()` can used to define multiple properties at once!

```javascript
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
```
* Method `Object.getOwnPropertyDescriptor()` can access the property descriptor for a given property.

```javascript
console.log(Object.getOwnPropertyDescriptor(book, 'age'));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
/*
%%%%%%%%%%%%CONSOLE%%%%%%%%%%%%
{ get: [Function],
  set: [Function],
  enumerable: false,
  configurable: false }
~~~~~~~~~~~~~~~~~~~~~~~~~~
{ value: 'VOLVING',
  writable: true,
  enumerable: true,
  configurable: false }
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
*/
```

### UNDERSTANDING AND CREATING OBJECTS

#### The Factory Pattern

```javascript
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
```

#### Constructor Pattern
Since JS cannot create a object by using the constructors in there `class`, constructor function became the convenient way to create object of specified 'class'

```javascript
function Person(name, age, mature){
	this.name = name;
	this.age = age;
	this.mature = mature;
	this.sayName = function () {
		console.log(this.name);
	}
}

p2 = new Person('Logan', 171, true);

console.log(p2);
p2.sayName();
```

* Problems with Constructors
	* downside

#### The Prototype Pattern

### Understanding Inheritance




## CHAPTER 8 Function Expressions >>Thus Jan 22nd, 2015 20:35:5

### RECURSION

### CLOSURES

#### Closures and Variables

#### The this Object

#### Memory Leaks

### MIMIKING BLOCK SCOPE

### PRIVATE VARIABLES

#### Static Private Variables

#### The Module Pattern

#### The Module-Augmentation Pattern

### SUMMARY


## The Browser Object Model

### The Window Object

### The Global Scope

### Window Relationships and Frames

### Window Position

### Window Size

### Navigating and Opening Windows

#### Popping Up Windows

#### Security Restrictions

#### Pop-up Blockers

### Intervals and Timeouts

### System Dialogs:***`alert()`***,***`confirm()`***,***`prompt()`***

### THE LOCATION OBJECT

#### Query String Arguments

#### Manipulating the Location

### THE NAVIGATOR OBJECT

#### Detecting Plug-ins

#### Registering Handlers

### THE SCREEN OBJECT

### THE HISTORY OBJECT

### SUMARY


## CHAPTER 9 CLIENT DETECTION

### CAPABILITY DETECTION

#### Safer Capability Detection

#### Capability Detection Is Not Browser Detection

### QUIRKS DETECTION

### USER-AGENT DETECTION

#### History

#### Early Browsers

##### Netscape Navigator 3 and IE 3

##### Netscape Communicator 4 and IE 4~8

#### Gecko

#### WebKit

#### Konqueror

##### Chrome

##### Opera

#### iOS and Android

### Working with User-Agent Detection

#### Identifying the Rendering Engine

#### Identifying the Browser

#### Identifying the Platform

#### Identifying Windows Operating System

#### Identifying Mobile Devices

#### Identifying Game Systems

#### The Complete Script

### Usage

### SUMMARY




## CHAPTER 10 THE DOM
-----------------------------

### HIERARCHY OF NODES

#### The Node Type
=============================

##### The nodeName and nodeValue Properties

##### Node Relationships

##### Manipulating Nodes

##### Other Methods

#### The Document Type
=============================

##### Document Children

##### Document Information

##### Locating Elements

##### Special Collections

##### DOM Conformance Detection

##### Document Writing 

#### The Element Type
=============================

##### HTML Elements

###### Getting Attributes

###### Setting Attributes

###### The attributes Property

###### Creating Elements

###### Element Children

#### The Next Type
=============================

##### Creating Text Nodes


##### Normalizing Text Nodes

##### Splitting Text Nodes

##### The Comment Type

##### The CDATASection Type

##### The DocumentType Type

##### The DocumentFragment Type

##### The Attr Type



### WORKING WITH THE DOM

#### Dynamic Scripts

#### Dynamic Styles

#### Manipulating Tables

#### Using NodeLists

### SUMMARY



## CHAPTER 11 DOM EXTENTIONS

## CHAPTER 12 DOM LEVELS 2 AND 3

## CHAPTER 13 EVENTS
-----------------------------

## CHAPTER 14 SCRIPTING FORMS
-----------------------------

## CHAPTER 15 GRAPHICS WITH CANVAS
-----------------------------

## CHAPTER 16 HTML5 SCRIPTING
-----------------------------


## CHAPTER 17 ERROR HANDLING AND DEBUGGING

## CHAPTER 18 XML IN JAVASCRIPT

## CHAPTER 19 ECMASCRIPT FOR XML



## CHAPTER 20 JSON
-----------------------------

## CHAPTER 21 AJAX AND COMET

## CHAPTER 22 ADVANCED TECHNIQUES


## CHAPTER 23 OFFLINE APPLICATIONS AND CLIENT-SIDE STORAGE
-----------------------------

## CHAPTER 24 BEST PRACTICES
-----------------------------

## CHAPTER 25 EMERGING APIS
-----------------------------

## APPENDIX C JavaScript Libraries
-----------------------------

## APPENDIX D JavaScript Tools
-----------------------------


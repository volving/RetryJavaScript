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

```
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
	* Number: Number is not seperated into integers and floating-points.
	* String

* Objects: No complex DATATYPEs, Object is the base type for all objects in JavaScript
* Operators provided: arithmetic operators, Boolean operators, relational operators, equality operators and assignment operators.
* Flow-control statements borrowed from other languages. `if`,`for`,`switch`
* **Functions** are totally different from other language like C and Java.
	* No need to specify the return value: **ANY** function can return **ANY** value at **ANY** time.
	* Functions return `undefined` if they don't specify a return value
	* No function signature, so there're no overloading, arguments are passed as an array containning zero or more values.
	* **ANY** number of arguments can be passed into a function and are accessible through the `arguments` object.
	

## Chapter 4 p86~ === 9:23 PM January 19, 2015
	

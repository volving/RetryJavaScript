# 读书笔记 for **Professional JavaScript for Web Developers, 3rd Edition**

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
	
#### *Keywords*, *reserved words*, *true*, *false* and *null* cannot be used.

* **Keywords** and **Reserved words**
	* Keywords
	>break do instanceof typeof case else new var catch finally return void continue for switch while debugger* function this with default if throwdelete in try


	* Reserved words
	> abstract enum int boolean export interface byte extends longchar final native class float package const goto private debugger implements protected double import public short static super synchronized throws transient volatile 

#### Variables
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

### Data types
---
>
	* 5 primitive types:
			Undefined, Null, Boolean, Number, String.
	* 1 Object: an unordered list of name-value pairs.
	* typeof:
		undefined, boolean, string, number, object(object, null), function#### undefined
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

* ==Always remember to initialize variable. If so, you'll know the error is caused by the given variable not declared rather than not initalized.==

#### Null
* null is an empty object ponter

	```javascript
	var car = null;
	alert(typeof car); //"object"
		
	```
	
* ==When defining a variable that is meant to later hold an object, it's advisable to initialize the variable to **null** as opposed to anything else.== That way, you can explicitly check for the value **null** to determine if the variable has been filled with an object reference at a lter time.

	```javascript
	if(car != null){
		//do something with car
	}
	```
* undefined is derivative of null
		
	```javascript
	console.log(null == undefined); //true	```
	
* ==Always remember to do this==

	```javascript
	var a_undefined_var;	//Never '= undefined'
	var an_empty_pointer_to_object = null;
	```
#### Boolean
* only to literal values: true, false
* distinct from numeric values, true != 1, false != 0
		
	```javascript	var found = true;
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
	* Number.MIN_VALUE  
	* Number.MAX_VALUE	* NaN 
	* Special numeric value called NaN, short for Not a Number	* Number Conversions: 3 functions to convert nonnumeric values into numbers
	* Number() //used for any data type
		* Number(undefined) => NaN
		* literal integer into integer
		* literal hexadecimal into integer
		* literal float into float
		* others  into NaN
		
	* parseInt() //String to int
	* parseFloat() // String to float#### String
	
* use "", '' to hold strings, they have ***no differences*** at all* The Nature of String
* som


#### Objects* Objects are never copied!
* They're passed around by ***REFERENCE***

	```javascript
	var a = {}, b = {};
	console.log(a == b); //false	var c = d = {};
	console.log(c == d); //true
	c.name = "c";
	console.log(d); //{name="c"}
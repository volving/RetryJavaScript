
#Multiple keystroke detection concept
本文出自[这里](http://stackoverflow.com/questions/5203407/javascript-multiple-keys-pressed-at-once)

```
var map = []; // Or you could call it "key"
onkeydown = onkeyup = function(e){
	e = e || event; // to deal with IE
	map[e.keyCode] = e.type == 'keydown';
	/*insert conditional here*/
}
```
This code is very simple: Since the computer only passes one keystroke at a time, an array is created to keep track of multiple keys. The array can then be used to check for one or more keys at once.

Just to explain, let's say you press A and B, each fires a keydown event that sets map[e.keyCode] to the value of e.type == keydown, which evaluates to either true or false. Now both map[65] and map[66] are set to true. When you let go of A, the keyup eventfires, causing the same logic to determine the opposite result for map[65] (A), which is now false, but since map[66] (B) is still down, it remains true.

The map array, through both events, looks like this:

```
//keydown A, keydown B
[
    65:true,
    66:true
]
//keyup A, keydown B
[
    65:false,
    66:true
]
```

There are two things you can do now:

A) A Key logger (example) can be created as a reference for later when you want to quickly figure out one or more key codes. Assuming you have defined an html element and pointed to it with the variable element.

```
element.innerHTML = '';
var i, l = map.length;
for(i = 0; i < l; i ++){
    if(map[i]){
        element.innerHTML += '<hr>' + i;
    }
}
```

Note: You can easily grab an element by its id attribute.

```html
<div id="element"></div>
```

This creates an html element that can be easily referenced in javascript with element

```javascript
alert(element); // [Object HTMLDivElement]

```

You don't even have to use document.getElementById() or $() to grab it. But for the sake of compatibility, use of jQuery's $() is more widely recommended.

Just make sure the script tag comes after the body of the HTML. Optimization tip: Most big-name websites put the script tag after the body tag for optimization. This is because the script tag blocks further elements from loading until its script is finished downloading. Putting it ahead of the content allows the content to load beforehand.

B (which is where your interest lies) You can check for one or more keys at a time where /*insert conditional here*/ was, take this example:

```
if(map[17] && map[16] && map[65]){ // CTRL+SHIFT+A
    alert('Control Shift A');
}else if(map[17] && map[16] && map[66]){ // CTRL+SHIFT+B
    alert('Control Shift B');
}else if(map[17] && map[16] && map[67]){ // CTRL+SHIFT+C
    alert('Control Shift C');
}
```

This example checks for ***CtrlShiftA***, ***CtrlShiftB***, and ***CtrlShiftC***

It's just as simple as that :)

Note: As a general rule, it is good practice to document code, especially things like Key codes (like // CTRL+ENTER) so you can remember what they were. And also to put the key codes in the same order as the documentation (CTRL+ENTER => map[17] && map[13], NOT map[13] && map[17]). This way you won't ever get confused when you need to go back and edit the code.

Note 2: If checking for combos of differing amounts (like ***CtrlShiftAltEnter*** and ***CtrlEnter***), put smaller combos after larger combos, or else the smaller combos will override the larger combos. Example:
```
// Correct:
if(map[17] && map[16] && map[13]){ // CTRL+SHIFT+ENTER
    alert('Whoa, mr. power user');
}else if(map[17] && map[13]){ // CTRL+ENTER
    alert('You found me');
}else if(map[13]){ // ENTER
    alert('You pressed Enter. You win the prize!')
}
```

```
// Incorrect:
if(map[17] && map[13]){ // CTRL+ENTER
    alert('You found me');
}else if(map[17] && map[16] && map[13]){ // CTRL+SHIFT+ENTER
    alert('Whoa, mr. power user');
}else if(map[13]){ // ENTER
    alert('You pressed Enter. You win the prize!');
}
```

```
// What will go wrong: When trying to do CTRL+SHIFT+ENTER, it will
// detect CTRL+ENTER first, and override CTRL+SHIFT+ENTER.
// Removing the else's is not a proper solution, either
// as it will cause it to alert BOTH "Mr. Power user" AND "You Found Me"
```

Note 3: When dealing with alerts or anything that takes focus from the main window so the array can't update, you might want to include map = [] to reset the array after the condition is done. For example:


```
if(map[17] && map[13]){ // CTRL+ENTER
    alert('Oh noes, a bug!');
}
```
// When you Press any key after executing this, it will alert again, even though you 
// are clearly NOT pressing CTRL+ENTER
// The fix would look like this:

```
if(map[17] && map[13]){ // CTRL+ENTER
    alert('Take that, bug!');
    map = [];
}
```

// The bug no longer happens since the array is cleared
EDIT: Here's an annoying thing I found, with the solution included:
Problem: Since the browser usually has default actions on key combos (like CtrlD activates the bookmark window, or CtrlShiftC activates skynote on maxthon), you might also want to add return false after map = [], so users of your site won't get frustrated when the "Duplicate File" function, being put on CtrlD, bookmarks the page instead.

```
if(map[17] && map[68]){ // CTRL+D
    alert('The bookmark window didn\'t pop up!');
    map = [];
    return false;
}
```

Without return false, the Bookmark window would pop up, to the dismay of the user.

END EDIT



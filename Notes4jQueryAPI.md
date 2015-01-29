# Notes for jQuery API

## `.animate()`	Mon Jan 26th, 2015 13:55:34

* `.animate(properties [, duration][,easing][,complete])`
	1. [`properties`](id:properties) : A ***PlainObject*** of CSS properties and values that the animation will move toward.
	2. `duration`(400) : A ***string or number*** determining how long the animation will run.
	3. `easing`(swing) : A ***string*** indicating which easing function to use for the transition.
	4. `complete` : A ***function*** to call once the animation is complete.

* `.animate(properties, options)`
	1. `properties` : same as [this](#properties)
	2. `options` : A map (`PlainObject`) of additional options to pass to the method.
		* duration
		* easing
		* queue : A ***Boolean or String*** indicating whether to place the animation in the effects queue. If false, the animation will begin immediately.
		* specialEasing: A map of one or more of the CSS properties defined by the properties argument and their corresponding easing function.
		* step : A `function(Number now, Tween tween)` to be called for each animated property of each animated element. This function provides an opportunity to modify the Tween object to change the value of the property before it is set.
		* progress : A `function(promise animation, Number progress, Number remainingMs)` to be called after each step of the animation, only once per animated element regardless of the number of animated properties.
		* complete : A function to call once the animation is complete.
		* start : A `function(Promise animation)` to call when the animation begins.
		* done : A `function(Promise animation, Boolean jumpedToEnd)` to be called when the animation completes.
		* fail : A `function(Promise animation, Boolean jumpedToEnd)` to be called when the animation fails to complete.
		* always : A `function(Promise animation, Boolean jumpedToEnd)` to be called when the animation completes or stops without completing

The `animate()` method allows us to create animation effects on any numeric CSS property. The only required parameter is a plain object of CSS properties. The object is similar to the one that can be sent to the `.css()` method, except that the range of properties is more restrictive.


* 
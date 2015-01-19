# JavaScript学习路线

完成整个课程大纲需要花上6～8天的时间，将学会完整的JS语言（包括JQuery核一些HTML5）

###### 参考书 Professional JavaScript for Web Developers(***ProJS*** for short!!)
###### JavaScript终极编辑器：WebStorm 这是最值得投资的利器
  
### 学习进程安排：
* 1～2天 简介 数据类型， 表达式， 操作符
	* 参考书：***前言＋第1～2章*** 
		* 使用FireFox搭配 Firebug调试代码
		* 完成Codecademy上[JavaScript Track](http://www.codecademy.com/tracks/javascript)的Introduction to JavaScript部分
	* 参考书：***第3～4章*** 跳过位操作部分
		* 完成Codecademy上[JavaScript Track](http://www.codecademy.com/tracks/javascript)的Introduction to JavaScript的*2～5*部分
* 3～4天 对象， 数组， 函数， DOM， jQuery
	* 阅读***ProJS***第6章， 只看*Understanding Objects*部分
	* 阅读博文 [JavaScript对象详解](http://javascriptissexy.com/javascript-objects-in-detail/)
	* 到Codecademy上完成相应的6～8部分
	* 实现Codecademy上[Projects](http://www.codecademy.com/tracks/projects)路线的5个基础小项目（Basic Projects）完成这些以后就不用Codecademy了
	* 阅读 ***ProJS*** 第8，9，10，11，13和14章。 注意⚠***ProJS***没设计jQeury
	* 参照[jQuery官方教程](http://try.jquery.com/)进行学习
* 至此，所学知识足够创建一个稳固、可维护的web应用了。作为练习，设计一个JavaScript问答应用，功能如下：
	* 这是一套单选测试题， 完成之后会显示用户成绩。
	* 问答应用可以产生任意多的问题，每个问题有任意多的选项。
	* 在最后的页面显示用户的成绩。 这个页面进现实成绩， 所以要吧最后一个问题去掉。
	* 用数组存储所有的问题，每个问题包括它的选项和正确答案，都封装成一个对象，问题数组看起来应该是这样：
		
>>>
```javascript
var allQuestions = [
	{
		question: "Who is Prime Minister of the United Kingdom?",
		choices:[
			"David Cameron",
			"Gordon Brown",
			"Winston Churchill",
			"Tony Blair"
		],
		correctAnswer: 0
	}
];
```

*	* 当用户点击“Next”时， 使用```document.getElementById```或jQuery动态添加一个问题，并且移去当前问题。在这个版本里“Next”是唯一的导航按钮。
	* 
* 5～6天 正则表达式， Windows对象， 事件， jQuery
	* 阅读***ProJS***第20，23章
	* 完全理解样例代码
	* 学习＋提升
	* 升级上次做的问答应用
		* 添加客户端验证：保证用户回答了当前问题才能进入下一个问题
		* 添加“Back”按钮， 允许用户返回修改答案。 最多返回到第一个问题。 注意对于用户回答过的问题， 选择按钮要现实被选中，这样用户就无需重新回答问题。
		* 用jQuery添加动画（淡出当前问题，淡入下一问题）
		* 把问题倒出JSON文件
		* 添加用户认证，允许用户登录， 把用户认证信息保存在**本地存储**（html5,local storage）
		* 使用cookies记住用户， 当用户再次登录时显示“欢迎**用户名**回来”
		
* 7天 类， 继承， HTML5
	1. 阅读博文 [JavaScript面向对象必知必会](http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)
	2. 阅读***ProJS*** 第6， 16， 22， 24. 第6只读“Object Creation”和“Inheritance”部分。**注意：**这是JS中技术性强度最大的部分， 但至少应学会“Prototype Pattern”，“Factory Pattern”和“Prototypal Inheritance”.
	3. 继续升级之前的问答应用：
		* 页面使用 [Twitter Bootstrap][1]， 把问题的元素弄的看起来专业一点。 而作为额外奖励，用[Twitter Bootstrap][1]的[标签控件][2]显示问题,每个标签显示一个问题。
		* 学习[Handlebars][3],将Handlebars.js模板用在问答应用上。 这时JS代码中不再出现HTML代码了。
		* 记录参加问答的用户的成绩， 展示用户在问答应用中与其他用户的排名比较。
[1]:https://twitter.github.com/bootstrap/
[2]:http://getbootstrap.com/2.3.2/components.html#navs
[3]:http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
	4. 学完***Backbone.js*** 和 ***Node.js***后, 再用这两种最新的JS框架重构问答应用的代码，使之成为复杂的单页面现代Web应用，并且还要把用户的认证信息和成绩保存在 ***MongoDB*** 数据库里。
	5. 构思一个项目，趁热打铁迅速开发。卡住的时候参考 ***JavaScript权威指南*** 或者 ***ProJS***。成为StackOverFlow的活跃用户， 多多提问，尽量回答。
	

* 继续提升
	1. [精通backbone.js](http://javascriptissexy.com/learn-backbone-js-completely/)
	2. [中高级JavaScript进阶](http://javascriptissexy.com/learn-intermediate-and-advanced-javascript/)
	3. [不侧漏精通**Node.js**](http://www.crimx.com//2014/05/22/learn-node-js-completely-and-with-confidence/)
	4. [Meteor.js入门](#)
	5. [Best 3 Framework for JS](#)

[Bootstrap](http://getbootstrap.com/2.3.2/components.html)

http://macdown.uranusjr.com/download/v0.1/
https://github.com/uranusjr/macdown/releases/download/v0.1/MacDown.app.zip
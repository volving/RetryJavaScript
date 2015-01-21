//Example:Object defining


var language = {
	name: "JavaScript",
	created: 1995,
	isSupportedByBrowsers: true,
	//Object can be nested!!!
	author: {
		firstName: "Brendan",
		secondName: "Eich"
	},
	
	//Function can also be value of property!
	getAuthorName: function () {
		return (this.author.firstName + " " + this.author.secondName);
	}
	
}

l = language;
console.log(language.getAuthorName());
console.log(language.author);
l.same = "same";
console.log(l.same);
function say(msg) {
	console.log(msg);
}

var uri = 'http://www.wrox.com/illegal value.htm#start';

say(encodeURI(uri));

say(encodeURIComponent(uri))

/*
*encodeURI, encodeURIComponent
*/
var en = function (msg) {
	say(encodeURI(msg));
};

var enc = function (msg) {
	say(encodeURIComponent(msg));
}

en("http://www.net.cn/中文 阿拉山口的肌肤.html");

say('');

/*
*Dencode
*/
var de = function (msg) {
	say(decodeURI(msg));
};

var dec = function (msg) {
	say(decodeURIComponent(msg));
}

de('http://www.net.cn/%E4%B8%AD%E6%96%87%20%E9%98%BF%E6%8B%89%E5%B1%B1%E5%8F%A3%E7%9A%84%E8%82%8C%E8%82%A4.html')
dec('http://www.net.cn/%E4%B8%AD%E6%96%87%20%E9%98%BF%E6%8B%89%E5%B1%B1%E5%8F%A3%E7%9A%84%E8%82%8C%E8%82%A4.html')


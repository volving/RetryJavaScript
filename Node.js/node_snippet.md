# Node.js snippet

## File transfermation:

```javascript
var fs = require('fs');
var f = '';
fs.readFile('index.html', function(error, content){
	f.append(content);
});

console.log(f);

```

```javascript
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents){
  	  response.write(contents);
			response.end();
  });
}).listen(8080);

```

```javascript
var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
chat.on('message', function(message){
  console.log(message);
});
```


```javascript
var url = require('url');
var request = require('request');
var express = require('express');
var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app = express();
app.get('/', function(req, res){
	request(searchURL).pipe(res);	
});

app.listen(8080);
```
# http.Server
## http.createServer(); //returns an instance of http.Server
Event emitter with the following events:

* [‘request’](http://nodejs.org/api/http.html#http_event_request): Emitted each time there is a request.`function(request, response){}` param request is an instance of http.IncomingMessage and param response is an instance of [http.ServerResponse](http://nodejs.org/api/http.html#http_class_http_serverresponse). 
* ‘connect’: `function (request, socket, head) { }` Emitted each time a client requests a http CONNECT method. If this event isn't listened for, then clients requesting a CONNECT method will have their connections closed.
* ‘connection’:
* ‘clientError’: `function (exception, socket) { }` If a client connection emits an 'error' event - it will forwarded here.
socket is the net.Socket object that the error originated from.
* ‘close’: `function () { }` Emitted when the server closes.
* ‘checkContinue’:`function (request, socket, head) { }`Emitted each time a client requests a http CONNECT method. If this event isn't listened for, then clients requesting a CONNECT method will have their connections closed.
* 'upgrade':`function (request, socket, head) { }` Emitted each time a client requests a http upgrade. If this event isn't listened for, then clients requesting an upgrade will have their connections closed.

## [Methods](http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)
* server.listen(port, [hostname], [backlog], [callback])
* server.listen(path, [callback])#
* server.listen(handle, [callback])#
* server.close([callback])#
* 

e.g.

```javascript
var http = require('http');
var msg = 'Hello, buddy!';
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'Text/Plain',
							'Content-Length':msg.length
							});
	res.write($('<p>').text(msg));
	res.end();
});
server.listen(10086);

```

## http.ServerResponse
### Events:
* `close()`
* `finish()`

### Methods
* response.writeHead(statusCode, [reasonPhrase], [headers])#

## http.request(options, [callback])#

* options can be an object or a string. If options is a string, it is automatically parsed with url.parse().

	Options:

	* **host**: A domain name or IP address of the server to issue the request to. Defaults to 'localhost'.
	* **hostname**: To support url.parse() hostname is preferred over host
	port: Port of remote server. Defaults to 80.
	localAddress: Local interface to bind for network connections.
	socketPath: Unix Domain Socket (use one of host:port or socketPath)
	* **method**: A string specifying the HTTP request method. Defaults to 'GET'.
	* **path**: Request path. Defaults to '/'. Should include query string if any. E.G. '/index.html?page=12'
	* **headers**: An object containing request headers.
	* **auth**: Basic authentication i.e. 'user:password' to compute an Authorization header.
	* **agent**: Controls Agent behavior. When an Agent is used request will default to Connection: keep-alive. Possible values:
	undefined (default): use global Agent for this host and port.
	* **Agent object**: explicitly use the passed in Agent.
	* **false**: opts out of connection pooling with an Agent, defaults request to Connection: close.

	[callback]

	* The optional callback parameter will be added as a one time listener for the 'response' event.



## events

* Event 'response'
* Event: 'socket'#
* Event: 'connect'#


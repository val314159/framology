var stack = require("stack.io");
stack.io({}, function(error, client) {
	client.use("test-service", function(error, test) {
		test.sayHello("Bob", function(error, response) {
			console.log(response); //=> prints "Hello, Bob!"
		    });
	    });
    });

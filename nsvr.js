var stack = require("stack.io");
stack.io({}, function(error, client) {
	client.expose("test-service", {
		sayHello: function(name, reply) {
		    reply("Hello, " + name + "!...");
		}
	    });
    });

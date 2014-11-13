Console = {
    activate: function(){
	this.login();
    },
    
    config: {
	url: "http://localhost:8080"
    },
    
    authInfo: {
	username: 'demo',
	password: 'demo-password'
    },

    name: 'Bob',

    $$update_input: function(name,value){
	LOG("$$update_input(" + name + value);
    },

    login: function() {
	var self=Console;
	var username=Console.authInfo.username;
	var password=Console.authInfo.password;
	console.log("LOGIN XXX:"+username);
	$HTML("#status","Start Login1"+this);
	stack.io({host: self.config.url}, function(error, client) {
		$HTML("#status","Start Login2");
		console.log("THIS"+str(self));
		client.login(username, password, function(error) {
			$HTML("#status","Success");
			client.use("test-service", function(error, test) {
				$HTML("#status","Returned");
				test.say_hello(self.name, function(error, response) {
					$HTML("#lastReturn",response);
				    });
			    });
		    });
	    });
    }
};

var Console = {
    activate: function(){
	console.log("-- alogin ");
	console.log("-- alogin "+this);
	console.log("-- alogin "+Console);
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

    $$update2: function(name,value,type){
	console.log("-- update2 ");
	console.log("-- update2 "+this);
	console.log("-- update2 "+Console);
	var arr = name.split('.');
	this[arr[0]][arr[1]] = value;
    },

    login: function() {
	console.log("-- login ");
	console.log("-- login "+this);
	console.log("-- login "+Console);
	//var self=Console;
	var self=this;
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

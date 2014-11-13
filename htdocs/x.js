$=Sizzle;
function str(x){return JSON.stringify(x);}
function E(x){return document.getElementById(x);}
function $E(x){return $(x)[0];}
function $U(x){return x===undefined;}
function $HTML(x,y){
    if ($U(y)) return $E(x).innerHTML;
    $E(x).innerHTML = y;
}
var App = new function(){
	var self = this;
	var _msg = "hello there";
	self.msg = function(v){
	    if(!$U(v))$HTML("#app_output2",_msg=v);
	    return _msg;
	};
	var login = self.login = {
	    username: 'demo',
	    password: 'demo-password'
	};
	var main = self.main = function() {
	    stack.io({host: "http://localhost:8080"}, function(error, client) {
		    client.login(login.username, login.password, function(error) {
			    client.use("test-service", function(error, test) {
				    test.say_hello("Bob", function(error, response) {
					    $HTML("#app_output",response);
					});
				});
			});
		});
	};
    }();
console.log(str(App));
window.onload = App.main;
